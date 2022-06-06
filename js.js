const App = {
  init() {
    this.controllers.createComponents();
  },
  state: {},
  controllers: {
    createComponents() {
      const el = App.elements;

      el.main.style.display = 'flex';
      // el.main.style.flexDirection = 'column';

      el.main.appendChild(el.sideBar);
      el.sideBar.style.marginRight = '5px';
      el.sideBar.style.height = '100%';
      el.sideBar.style.display = 'flex';
      el.sideBar.style.flexDirection = 'column';
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

      const menuItems1 = document.createElement('div');
      const menuItems2 = document.createElement('div');
      const menuItems3 = document.createElement('div');
      const menuItems4 = document.createElement('div');
      const menuItems5 = document.createElement('div');

      el.menu.appendChild(menuItems1);
      menuItems1.style.borderBottom = '1px solid rgba(191, 249, 98, 1)';
      menuItems1.style.padding = '0px 0px 10px 0px';

      el.menu.appendChild(menuItems2);
      menuItems2.style.borderBottom = '1px solid rgba(191, 249, 98, 1)';
      menuItems2.style.padding = '10px 0px 10px 0px';

      el.menu.appendChild(menuItems3);
      menuItems3.style.borderBottom = '1px solid rgba(191, 249, 98, 1)';
      menuItems3.style.padding = '10px 0px 10px 0px';

      el.menu.appendChild(menuItems4);
      menuItems4.style.borderBottom = '1px solid rgba(191, 249, 98, 1)';
      menuItems4.style.padding = '10px 0px 10px 0px';

      el.menu.appendChild(menuItems5);
      menuItems5.style.borderBottom = '1px solid rgba(191, 249, 98, 1)';
      menuItems5.style.padding = '10px 0px 10px 0px';

      menuItems1.innerHTML = 'ウエディングケーキ';
      menuItems2.innerHTML = '誕生日ケーキ';
      menuItems3.innerHTML = 'ダイエットケーキ';
      menuItems4.innerHTML = '乳糖フリー';
      menuItems5.innerHTML = 'ビーガンケーキ';

      el.main.appendChild(el.mainContainer);
      // el.mainContainer.style.borderBottom = '1px solid green';
      el.mainContainer.style.height = 'fit-content';
      el.mainContainer.style.display = 'flex';
      el.mainContainer.style.justifyContent = 'space-between';
      el.mainContainer.style.width = '100%';
      el.mainContainer.style.background = 'rgba(191, 249, 98, 1)';
      el.mainContainer.style.padding = '10px 10px 10px 10px';

      const link1 = document.createElement('img');
      const link2 = document.createElement('a');
      const link3 = document.createElement('a');
      const link4 = document.createElement('img');

      link1.src = './src/home2.png';
      link2.innerHTML = 'ブログ';
      link3.innerHTML = 'コンタクト';
      link4.src = './src/cart.png';

      link1.style.width = '30px';
      link1.style.height = '30px';
      link4.style.width = '32px';
      link4.style.height = '30px';

      el.mainContainer.appendChild(link1);
      el.mainContainer.appendChild(link2);
      el.mainContainer.appendChild(link3);
      el.mainContainer.appendChild(link4);

      el.main.appendChild(el.bodyContainer);
      el.bodyContainer.style.border = '3px solid orange';
      el.bodyContainer.style.background = 'rgba(250, 247, 175, 1)';

      el.main.appendChild(el.footerContainer);
      el.footerContainer.style.border = '3px solid blue';
    },
  },
  elements: {
    main: document.getElementById('app'),
    sideBar: document.createElement('div'),
    menu: document.createElement('div'),
    mainContainer: document.createElement('div'),
    headerImg: document.createElement('img'),
    headerLink: document.createElement('div'),
    bodyContainer: document.createElement('div'),
    footerContainer: document.createElement('div'),
  },
};
App.init();
