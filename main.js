var application = require('app'),
    BrowserWindow = require('browser-window');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        center:true,
        title:"ElectronPowerMonitorDemo",
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});