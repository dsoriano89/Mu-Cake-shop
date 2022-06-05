const App = {
  init() {
    this.controllers.createComponents();
  },
  state: {},
  controllers: {
    createComponents() {
      const el = App.elements;

      el.main.style.display = 'flex';

      el.main.appendChild(el.sideBar);
      el.sideBar.style.marginRight = '5px';
      // el.sideBar.style.padding = '5px 0px 20px 20px';
      // el.sideBar.style.border = '2px solid gray';
      el.sideBar.style.height = '100%';
      el.sideBar.style.display = 'flex';
      el.sideBar.style.flexDirection = 'column';
      el.sideBar.style.borderBottom = '1px solid green';
      el.sideBar.style.alignItems = 'center';

      el.sideBar.appendChild(el.headerImg);
      el.headerImg.style.padding = '10px 10px 10px 20px';
      el.headerImg.src = './src/mucake.png';
      el.headerImg.style.width = '160px';
      el.headerImg.style.height = '150px';
      // el.headerImg.style.border = '2px solid orange';

      el.sideBar.appendChild(el.menu);

      el.menu.style.display = 'flex';
      el.menu.style.flexDirection = 'column';
      // el.menu.style.border = '2px solid blue';

      const menuItems1 = document.createElement('a');
      const menuItems2 = document.createElement('a');
      const menuItems3 = document.createElement('a');
      const menuItems4 = document.createElement('a');
      const menuItems5 = document.createElement('a');

      el.menu.appendChild(menuItems1);
      el.menu.appendChild(menuItems2);
      el.menu.appendChild(menuItems3);
      el.menu.appendChild(menuItems4);
      el.menu.appendChild(menuItems5);

      menuItems1.innerHTML = 'ウエディングケーキ';
      menuItems2.innerHTML = '誕生日ケーキ';
      menuItems3.innerHTML = 'ダイエットケーキ';
      menuItems4.innerHTML = '乳糖フリー';
      menuItems5.innerHTML = 'ビーガンケーキ';

      el.main.appendChild(el.mainContainer);
      el.mainContainer.style.borderBottom = '1px solid green';
      el.mainContainer.style.height = 'fit-content';
      el.mainContainer.style.display = 'flex';
      el.mainContainer.style.justifyContent = 'space-between';
      el.mainContainer.style.width = '100%';

      const link1 = document.createElement('a');
      const link2 = document.createElement('a');
      const link3 = document.createElement('a');
      const link4 = document.createElement('a');

      link1.innerHTML = '会社';
      link2.innerHTML = 'ブログ';
      link3.innerHTML = '住所';
      link4.innerHTML = 'コンタクト';

      el.mainContainer.appendChild(link1);
      el.mainContainer.appendChild(link2);
      el.mainContainer.appendChild(link3);
      el.mainContainer.appendChild(link4);
    },
  },
  elements: {
    main: document.getElementById('app'),
    sideBar: document.createElement('div'),
    menu: document.createElement('div'),
    mainContainer: document.createElement('div'),
    headerImg: document.createElement('img'),
    headerLink: document.createElement('div'),
  },
};
App.init();
