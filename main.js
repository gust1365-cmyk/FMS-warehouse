const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 1200,
    minHeight: 700,
    title: 'FMS 창고 로케이션 현황',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    backgroundColor: '#0f1117',
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));

  // 메뉴 간소화
  const menu = Menu.buildFromTemplate([
    {
      label: '파일',
      submenu: [
        { label: '새로고침', accelerator: 'F5', click: () => win.reload() },
        { type: 'separator' },
        { label: '종료', accelerator: 'Alt+F4', role: 'quit' }
      ]
    },
    {
      label: '보기',
      submenu: [
        { label: '전체화면', accelerator: 'F11', role: 'togglefullscreen' },
        { label: '개발자 도구', accelerator: 'F12', role: 'toggleDevTools' },
        { type: 'separator' },
        { label: '확대', accelerator: 'CmdOrCtrl+=', role: 'zoomIn' },
        { label: '축소', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { label: '기본 크기', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
