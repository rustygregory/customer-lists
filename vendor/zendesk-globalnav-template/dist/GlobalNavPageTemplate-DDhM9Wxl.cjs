"use strict";const e=require("react/jsx-runtime"),j=require("react"),o=require("styled-components"),_=require("@zendeskgarden/react-theming"),v=require("@zendeskgarden/react-avatars"),n=require("./GlobalNavIcons-DfAm9O78.cjs"),g=require("./AdminCenterMainContent-D6Xs70E9.cjs"),ee=o.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 256px;
  background-color: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px rgba(10, 13, 14, 0.16);
  padding: 4px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ne=o.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${i=>i.$isActive?"#293239":"transparent"};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isActive?"white":"#293239"};
  text-align: left;

  &:hover {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.04)"};
  }

  &:active {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.08)"};
  }
`,ie=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,T=[{id:"support",name:"Support",icon:n.ProductSupportIcon},{id:"knowledge",name:"Knowledge",icon:n.ProductKnowledgeIcon},{id:"ai-agents",name:"AI agents",icon:n.ProductAIAgentsIcon},{id:"chat",name:"Chat",icon:n.ProductChatIcon},{id:"voice",name:"Voice",icon:n.ProductVoiceIcon},{id:"analytics",name:"Analytics",icon:n.ProductAnalyticsIcon},{id:"workforce-management",name:"Workforce management",icon:n.ProductWorkforceManagementIcon},{id:"quality-assurance",name:"Quality assurance",icon:n.ProductQualityAssuranceIcon},{id:"community",name:"Community",icon:n.ProductCommunityIcon},{id:"sales",name:"Sales",icon:n.ProductSalesIcon},{id:"admin-center",name:"Admin center",icon:n.ProductAdminCenterIcon}],W=({currentProduct:i="support",onSelectProduct:p,onClose:s})=>{const h=t=>{p?.(t),s?.()};return e.jsx(ee,{children:T.map(t=>{const b=t.icon,r=t.id===i,m=r?"white":"#5C6970";return e.jsxs(ne,{$isActive:r,onClick:()=>h(t.id),children:[e.jsx(ie,{children:e.jsx(b,{size:20,color:m})}),e.jsx("span",{children:t.name})]},t.id)})})},oe=o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,se=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,re=o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,C=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,te=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,D=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,ce=o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 320px;
  min-width: 240px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #b0b8be;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #5c6970;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #87929d;
  }

  &:focus-within {
    border-color: #1f73b7;
    outline: none;
  }
`,z=o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,$=o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,ae=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
  }
`,F=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
    background-color: transparent;
  }
`,f=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  position: relative;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,le=o.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #d93f4c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
  color: white;
`;o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;const O=({currentProduct:i="support",onProductChange:p})=>{const[s,h]=j.useState(!1),t=j.useRef(null),b=I=>{p?.(I)};j.useEffect(()=>{const I=Y=>{t.current&&!t.current.contains(Y.target)&&h(!1)};if(s)return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[s]);const r=T.find(I=>I.id===i)||T[0],m=i==="admin-center",S=i==="knowledge",x=i==="ai-agents",P=i==="workforce-management",M=i==="quality-assurance",X=i==="analytics";return e.jsxs(oe,{children:[e.jsxs(se,{children:[e.jsx(te,{children:e.jsx(n.ZendeskLogoIcon,{size:20})}),e.jsxs(D,{ref:t,onClick:()=>h(!s),children:[e.jsx(ce,{children:r.name}),e.jsx(n.ChevronDownIcon,{size:12}),s&&e.jsx(W,{currentProduct:i,onSelectProduct:b,onClose:()=>h(!1)})]})]}),e.jsx(re,{children:m?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(z,{children:e.jsx($,{})}),e.jsx(N,{children:"Camera obscura"})]}),e.jsxs(C,{children:[e.jsxs(G,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search admin center"})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):S?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(z,{children:e.jsx($,{})}),e.jsxs(D,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Joe's Coffee"}),e.jsx(n.ChevronDownIcon,{size:12})]})]}),e.jsxs(C,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(F,{size:"small",children:"Create content"}),e.jsx(F,{size:"small",disabled:!0,children:"Help center"})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):x?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(z,{children:e.jsx($,{})}),e.jsx(N,{children:"Camera obscura"})]}),e.jsxs(C,{children:[e.jsxs(D,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Test bot"}),e.jsx(n.ChevronDownIcon,{size:12})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):P?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(G,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(f,{children:e.jsx(n.EarthIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):M?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(G,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):X?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(G,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(z,{children:e.jsx($,{})}),e.jsxs(ae,{children:[e.jsx(n.PlusIcon,{size:12}),e.jsx("span",{children:"Add"})]})]}),e.jsxs(C,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(f,{children:e.jsx(n.MagnifyingGlassIcon,{size:20})}),e.jsx(F,{size:"small",disabled:!0,children:"Conversations"}),e.jsx(f,{children:e.jsx(n.ProductChatIcon,{size:20})}),e.jsx(f,{children:e.jsx(n.ProductVoiceIcon,{size:20})})]}),e.jsx(z,{children:e.jsx($,{})}),e.jsxs(f,{children:[e.jsx(n.BellIcon,{size:20}),e.jsx(le,{children:"1"})]}),e.jsx(f,{children:e.jsx(n.RocketIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]})})]})},de=o.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,xe=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,pe=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,he=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,ge=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${i=>i.$isActive?"#293239":"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.08)"};
  }
`,ue=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,be=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`,je=o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`,fe=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(10, 13, 14, 0.16);

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,me=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.InboxIcon,label:"Inbox"},{id:2,icon:n.BookContactsIcon,label:"Contacts"},{id:3,icon:n.BuildingIcon,label:"Organization"},{id:4,icon:n.ShapesIcon,label:"Custom Objects"},{id:5,icon:n.BarChartSquareIcon,label:"Analytics"},{id:6,icon:n.GearIcon,label:"Settings"}],ve=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BuildingIcon,label:"Account"},{id:2,icon:n.PeopleIcon,label:"People"},{id:3,icon:n.PaperPlaneIcon,label:"Channels"},{id:4,icon:n.SparkleIcon,label:"AI"},{id:5,icon:n.MonitorIcon,label:"Workspaces"},{id:6,icon:n.FlowIcon,label:"Objects & rules"},{id:7,icon:n.AppsIcon,label:"Apps and integrations"}],Ce=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BookOpenIcon,label:"Knowledge"},{id:2,icon:n.BubbleCheckIcon,label:"Moderate content"},{id:3,icon:n.FoldersIcon,label:"Arrange content"},{id:4,icon:n.PaletteIcon,label:"Customize design"},{id:5,icon:n.PersonKeyIcon,label:"User permissions"},{id:6,icon:n.GearIcon,label:"Settings"}],Ie=[{id:0,icon:n.BarChartSquareIcon,label:"Analytics"},{id:1,icon:n.NotePencilIcon,label:"Content"},{id:2,icon:n.BubblesIcon,label:"Conversations"},{id:3,icon:n.GearIcon,label:"Settings"},{id:4,icon:null,label:"separator"},{id:5,icon:n.WrenchIcon,label:"AI agent management"},{id:6,icon:n.PersonKeyIcon,label:"Permissions"},{id:7,icon:n.DatabaseIcon,label:"Database"},{id:8,icon:n.SquareGridCircleIcon,label:"Apps"},{id:9,icon:n.PlugIcon,label:"Integrations"}],we=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.LayoutGridIcon,label:"Dashboard"},{id:2,icon:n.BarChartSquareIcon,label:"Reports"},{id:3,icon:n.DatabaseIcon,label:"Data"},{id:4,icon:n.CloudArrowDownIcon,label:"Export"},{id:5,icon:n.GearIcon,label:"Settings"}],ye=[{id:0,icon:n.LayoutGridIcon,label:"Dashboard"},{id:1,icon:n.BubblesIcon,label:"Conversations"},{id:2,icon:n.CheckSquareIcon,label:"Reviews"},{id:3,icon:n.InboxIcon,label:"Inbox"},{id:4,icon:n.GraduateCapIcon,label:"Training"}],ke=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.BarChartSquareIcon,label:"Analytics"},{id:2,icon:n.CloudSunIcon,label:"Forecasting"},{id:3,icon:n.CalendarIcon,label:"Scheduling"},{id:4,icon:n.PeopleIcon,label:"Team"},{id:5,icon:n.GearIcon,label:"Settings"}],Q=({currentProduct:i,activeNavItem:p,setActiveNavItem:s,isSubnavExpanded:h,setIsSubnavExpanded:t})=>{const b=i==="admin-center"?ve:i==="knowledge"?Ce:i==="ai-agents"?Ie:i==="analytics"?we:i==="quality-assurance"?ye:i==="workforce-management"?ke:me,S=i==="knowledge"||i==="ai-agents";return e.jsxs(de,{children:[e.jsx(xe,{}),e.jsx(pe,{children:b.map(x=>{if(x.label==="separator")return e.jsx(be,{children:e.jsx(je,{})},x.id);const P=p===x.id,M=typeof x.icon=="function"?x.icon:null;return e.jsx(he,{children:e.jsx(ge,{$isActive:P,onClick:()=>s(x.id),"aria-label":x.label,children:M?e.jsx(M,{size:20,color:P?"white":"#5C6970"}):x.icon})},x.id)})}),e.jsx(ue,{children:S&&e.jsx(fe,{onClick:()=>t(!h),"aria-label":h?"Collapse":"Expand",children:e.jsx(n.SidebarIcon,{size:20,color:"#5C6970"})})})]})},Se=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,ze=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,$e=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,Ae=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,R=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,k=o.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${i=>i.$isCurrent?"#293239":"transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.16)"};
  }
`,u=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isCurrent?"white":"#2f3941"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,w=o.div`
  display: flex;
  align-items: center;
  justify-center: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #49545c;
  text-align: center;
`,Pe=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Me=o.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,Ge=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,Te=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #68737d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,De=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,Fe=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,y=o(k)`
  padding-left: ${i=>i.$depth*24+12}px;
`,U=()=>{const[i,p]=j.useState(!0);return e.jsxs(Se,{children:[e.jsxs(ze,{children:[e.jsx($e,{children:"Knowledge"}),e.jsx(Ae,{children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsx(R,{children:e.jsx(k,{$isCurrent:!0,children:e.jsx(u,{$isCurrent:!0,children:"Sources"})})}),e.jsxs(Pe,{children:[e.jsxs(Me,{onClick:()=>p(!i),children:[e.jsxs(Ge,{children:[e.jsx(Te,{children:"Content"}),e.jsx(De,{})]}),e.jsx(Fe,{children:i?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),i&&e.jsxs(R,{children:[e.jsxs(k,{children:[e.jsx(u,{children:"All content"}),e.jsx(w,{children:"24"})]}),e.jsxs(y,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Joe's Coffee"}),e.jsx(w,{children:"24"})]}),e.jsxs(y,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Getting Started"})]}),e.jsxs(y,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Troubleshooting Guides"})]}),e.jsxs(y,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Product FAQs"})]}),e.jsxs(y,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Policies and Procedures"})]}),e.jsxs(y,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(u,{style:{marginLeft:"8px"},children:"Confluence"}),e.jsx(w,{children:"124"})]}),e.jsxs(k,{children:[e.jsx(u,{children:"Content blocks"}),e.jsx(w,{children:"0"})]}),e.jsxs(k,{children:[e.jsx(u,{children:"Procedures"}),e.jsx(w,{children:"12"})]}),e.jsxs(k,{children:[e.jsx(u,{children:"Media"}),e.jsx(w,{children:"0"})]})]})]})]})},Be=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`,Ne=o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`,Re=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`,J=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,c=o(J)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,B=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,a=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${i=>i.$isCurrent?"#293239":"transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.16)"};
  }
`,l=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,d=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isCurrent?"white":"#293239"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,A=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 16px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #2f3941;
  text-align: center;
  flex-shrink: 0;
`,q=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L=o.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,V=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`,H=o.p`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #5c6970;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  flex-shrink: 0;
`,K=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`,E=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`,Z=()=>{const[i,p]=j.useState("agents"),[s,h]=j.useState(!0),[t,b]=j.useState(!0),r=m=>{p(m)};return e.jsxs(Be,{children:[e.jsxs(Ne,{children:[e.jsx(Re,{children:"AI agents"}),e.jsx(J,{"aria-label":"Add new",children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsxs(B,{children:[e.jsxs(a,{$isCurrent:i==="agents",onClick:()=>r("agents"),children:[e.jsxs(l,{children:[e.jsx(n.BarChartSquareIcon,{size:20,color:i==="agents"?"white":"#5C6970"}),e.jsx(d,{$isCurrent:i==="agents",children:"Agents"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:i==="agents"?"white":"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="conversations",onClick:()=>r("conversations"),children:[e.jsxs(l,{children:[e.jsx(n.BubbleIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="conversations",children:"Conversations"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="settings",onClick:()=>r("settings"),children:[e.jsxs(l,{children:[e.jsx(n.GearIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="settings",children:"Settings"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]}),e.jsxs(q,{children:[e.jsxs(L,{onClick:()=>h(!s),children:[e.jsxs(V,{children:[e.jsx(H,{children:"Agent Management"}),e.jsx(K,{})]}),e.jsx(E,{children:s?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),s&&e.jsxs(B,{children:[e.jsxs(a,{$isCurrent:i==="agent-builder",onClick:()=>r("agent-builder"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="agent-builder",children:"Agent builder"}),e.jsx(A,{children:"123"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="templates",onClick:()=>r("templates"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="templates",children:"Templates"}),e.jsx(A,{children:"123"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="workflows",onClick:()=>r("workflows"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="workflows",children:"Workflows"}),e.jsx(A,{children:"123"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="monitoring",onClick:()=>r("monitoring"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="monitoring",children:"Monitoring"}),e.jsx(A,{children:"123"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="permissions",onClick:()=>r("permissions"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="permissions",children:"Permissions"}),e.jsx(A,{children:"123"})]}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]}),e.jsxs(q,{children:[e.jsxs(L,{onClick:()=>b(!t),children:[e.jsxs(V,{children:[e.jsx(H,{children:"Data & Integration"}),e.jsx(K,{})]}),e.jsx(E,{children:t?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),t&&e.jsxs(B,{children:[e.jsxs(a,{$isCurrent:i==="data-sources",onClick:()=>r("data-sources"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="data-sources",children:"Data sources"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="knowledge-base",onClick:()=>r("knowledge-base"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="knowledge-base",children:"Knowledge base"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="integrations",onClick:()=>r("integrations"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="integrations",children:"Integrations"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="api-connections",onClick:()=>r("api-connections"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="api-connections",children:"API connections"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="webhooks",onClick:()=>r("webhooks"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="webhooks",children:"Webhooks"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(a,{$isCurrent:i==="logs",onClick:()=>r("logs"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="logs",children:"Logs"})}),e.jsx(c,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]})]})},qe=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,Le=o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,Ve=o.div`
  display: flex;
`,He=o.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
`,Ke=()=>{const[i,p]=j.useState(0),[s,h]=j.useState("support"),[t,b]=j.useState(!1),r=x=>{h(x),p(0),b(!1)},m=s==="knowledge",S=s==="ai-agents";return e.jsx(_.ThemeProvider,{children:e.jsxs(qe,{children:[e.jsx(O,{currentProduct:s,onProductChange:r}),e.jsxs(Le,{children:[e.jsxs(Ve,{children:[e.jsx(Q,{currentProduct:s,activeNavItem:i,setActiveNavItem:p,isSubnavExpanded:t,setIsSubnavExpanded:b}),m&&t&&e.jsx(U,{}),S&&t&&e.jsx(Z,{})]}),e.jsxs(He,{children:[s==="support"&&e.jsx(g.SupportMainContent,{}),s==="knowledge"&&e.jsx(g.KnowledgeMainContent,{}),s==="ai-agents"&&e.jsx(g.AIAgentsMainContent,{}),s==="chat"&&e.jsx(g.ChatMainContent,{}),s==="voice"&&e.jsx(g.VoiceMainContent,{}),s==="analytics"&&e.jsx(g.AnalyticsMainContent,{}),s==="workforce-management"&&e.jsx(g.WorkforceManagementMainContent,{}),s==="quality-assurance"&&e.jsx(g.QualityAssuranceMainContent,{}),s==="community"&&e.jsx(g.CommunityMainContent,{}),s==="sales"&&e.jsx(g.SalesMainContent,{}),s==="admin-center"&&e.jsx(g.AdminCenterMainContent,{})]})]})]})})};exports.AIAgentsSubnav=Z;exports.GlobalNavPageTemplate=Ke;exports.KnowledgeSubnav=U;exports.MainNav=Q;exports.ProductTrayDropdown=W;exports.TopBar=O;exports.products=T;
//# sourceMappingURL=GlobalNavPageTemplate-DDhM9Wxl.cjs.map
