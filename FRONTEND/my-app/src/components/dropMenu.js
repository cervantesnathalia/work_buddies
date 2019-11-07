// import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Menu, Icon } from "antd";

// const { SubMenu } = Menu;

// class menuDrop extends Component {
//   state = {
//     theme: "dark",
//     current: "1"
//   };
//   render() {
//     return (
//       <div>
//         <br />
//         <br />
//         <Menu
//           theme={this.state.theme}
//           onClick={this.handleClick}
//           style={{ width: 256 }}
//           defaultOpenKeys={["sub1"]}
//           selectedKeys={[this.state.current]}
//           mode="inline"
//         >
//           <SubMenu
//             key="sub1"
//             title={
//               <span>
//                 <Icon type="mail" />
//                 <span>Navigation One</span>
//               </span>
//             }
//           >
//             <Menu.Item key="1">Option 1</Menu.Item>
//             <Menu.Item key="2">Option 2</Menu.Item>
//             <Menu.Item key="3">Option 3</Menu.Item>
//             <Menu.Item key="4">Option 4</Menu.Item>
//           </SubMenu>
//         </Menu>
//       </div>
//     );
//   }
// }

// export default menuDrop;
