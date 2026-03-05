//=============================================================================
// VanillaNya_WindowForJOS.js
//=============================================================================

/*:
 * @plugindesc 赤石之旅窗口
 * @author VanillaNya
 *
 * @help 这个插件专为赤石之旅准备
 * 为赤石之旅提供游戏弹窗
 * 专供所以无插件命令
 * 
 */

var Imported = Imported || {};
Imported.VanilaNya_WindowForJOS = true;
var VN = VN || {};
VN.parameters = PluginManager.parameters('VanilaNya_WindowForJOS');

//=============================================================================
// 游戏评价弹窗功能 - 使用PowerShell直接显示WinForms对话框
//=============================================================================

VN.openGameRatingWindow = function() {
    try {
        var cp = require('child_process');
        var path = require('path');
        var fs = require('fs');
        var os = require('os');
        
        if (os.platform() !== 'win32') {
            throw new Error('仅支持Windows平台');
        }
        
        // PowerShell脚本：显示WinForms输入框
        var psScript = `
[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms') | Out-Null
[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing') | Out-Null

$form = New-Object System.Windows.Forms.Form
$form.Text = '游戏评价问卷'
$form.Width = 320
$form.Height = 210
$form.StartPosition = 'CenterScreen'
$form.TopMost = $true
$form.MaximizeBox = $false
$form.MinimizeBox = $false
$form.FormBorderStyle = 'FixedDialog'
$form.Icon = $null
$form.ShowInTaskbar = $false

$label1 = New-Object System.Windows.Forms.Label
$label1.Text = '请评价您对本游戏的期望'
$label1.Location = New-Object System.Drawing.Point(20, 20)
$label1.Size = New-Object System.Drawing.Size(270, 20)
$form.Controls.Add($label1)

$label2 = New-Object System.Windows.Forms.Label
$label2.Text = '0 = 最低评价  ·  10 = 最高评价'
$label2.Location = New-Object System.Drawing.Point(20, 45)
$label2.Size = New-Object System.Drawing.Size(270, 20)
$label2.ForeColor = [System.Drawing.Color]::Gray
$form.Controls.Add($label2)

$textBox = New-Object System.Windows.Forms.TextBox
$textBox.Text = '5'
$textBox.Location = New-Object System.Drawing.Point(20, 75)
$textBox.Size = New-Object System.Drawing.Size(270, 25)
$textBox.TextAlign = 'Center'
$form.Controls.Add($textBox)

$okButton = New-Object System.Windows.Forms.Button
$okButton.Text = '确定'
$okButton.Location = New-Object System.Drawing.Point(75, 115)
$okButton.Size = New-Object System.Drawing.Size(75, 30)
$okButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
$form.AcceptButton = $okButton
$form.Controls.Add($okButton)

$cancelButton = New-Object System.Windows.Forms.Button
$cancelButton.Text = '取消'
$cancelButton.Location = New-Object System.Drawing.Point(165, 115)
$cancelButton.Size = New-Object System.Drawing.Size(75, 30)
$cancelButton.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$form.CancelButton = $cancelButton
$form.Controls.Add($cancelButton)

Try {
    $result = $form.ShowDialog()
    
    if ($result -eq [System.Windows.Forms.DialogResult]::OK) {
        Write-Host $textBox.Text
        [Environment]::Exit(0)
    } else {
        [Environment]::Exit(1)
    }
}
Finally {
    $form.Dispose()
}
`;
        
        var tempDir = os.tmpdir();
        var scriptPath = path.join(tempDir, 'rating_' + Date.now() + '.ps1');
        
        // 使用UTF-8 BOM编码写入文件，避免中文乱码
        var utf8bom = Buffer.from([0xEF, 0xBB, 0xBF]);
        var psScriptBuffer = Buffer.from(psScript, 'utf8');
        fs.writeFileSync(scriptPath, Buffer.concat([utf8bom, psScriptBuffer]), 'binary');
        
        // 返回一个Promise，而不是同步等待
        return new Promise(function(resolve, reject) {
            var psProcess = cp.spawn('powershell', [
                '-NoProfile',
                '-ExecutionPolicy', 'Bypass',
                '-File', scriptPath
            ], {
                stdio: ['ignore', 'pipe', 'pipe'],
                detached: false,  // 确保子进程随主进程关闭
                shell: false
            });
            
            var output = '';
            var timeout = null;
            
            psProcess.stdout.on('data', function(data) {
                output += data.toString('utf8');
            });
            
            psProcess.stderr.on('data', function(data) {
                console.log('PowerShell错误: ' + data.toString('utf8'));
            });
            
            // 30秒超时
            timeout = setTimeout(function() {
                psProcess.kill();
                try { fs.unlinkSync(scriptPath); } catch(e) {}
                reject(new Error('对话框超时'));
            }, 30000);
            
            psProcess.on('close', function(code) {
                clearTimeout(timeout);
                
                output = output.trim();
                console.log('PowerShell返回: ' + output + ' (code: ' + code + ')');
                
                if (code === 0 && output !== '') {
                    var ratingValue = parseInt(output);
                    if (!isNaN(ratingValue) && ratingValue >= 0 && ratingValue <= 10) {
                        VN.lastGameRating = ratingValue;
                        $gameVariables.setValue(100, ratingValue);
                        console.log('游戏评分已提交: ' + ratingValue);
                        try { fs.unlinkSync(scriptPath); } catch(e) {}
                        resolve(true);
                    } else {
                        try { fs.unlinkSync(scriptPath); } catch(e) {}
                        resolve(false);
                    }
                } else if (code === 1) {
                    console.log('用户点击了取消');
                    try { fs.unlinkSync(scriptPath); } catch(e) {}
                    resolve(false);
                } else {
                    try { fs.unlinkSync(scriptPath); } catch(e) {}
                    resolve(false);
                }
            });
            
            psProcess.on('error', function(err) {
                clearTimeout(timeout);
                console.log('PowerShell启动失败: ' + err.message);
                try { fs.unlinkSync(scriptPath); } catch(e) {}
                reject(err);
            });
        });
        
    } catch(e) {
        // 回退到简单的prompt
        console.log('系统对话框不可用，使用备用方案: ' + e.message);
        var rating = window.prompt('请评价您对本游戏的期望\n(请输入0-10之间的数字，0为最低评价，10为最高评价)', '5');
        
        if (rating !== null) {
            var ratingValue = parseInt(rating);
            if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 10) {
                window.alert('请输入0-10之间的有效数字！');
                return VN.openGameRatingWindow();
            }
            VN.lastGameRating = ratingValue;
            $gameVariables.setValue(100, ratingValue);
            console.log('游戏评分已提交: ' + ratingValue);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
};

// 获取评分
VN.getLastGameRating = function() {
    return VN.lastGameRating || 0;
};