import{r as e,h as t,H as s}from"./p-ee0b9025.js";import{S as i}from"./p-c74b54ba.js";import{e as a}from"./p-93cac3a6.js";import"./p-4745c03b.js";import"./p-a3b5bd35.js";import"./p-971980b1.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import"./p-88678d9c.js";import{T as l}from"./p-821a7518.js";import{c as n,a as r}from"./p-e77aabd2.js";import{c as o}from"./p-a3e4386d.js";import{S as d}from"./p-1df7be17.js";import{i as c}from"./p-e0a11db6.js";import{r as p}from"./p-2f0108ae.js";import{l as u}from"./p-6137089a.js";import{p as y}from"./p-904e3264.js";import{F as m,a as S}from"./p-a47b4ab7.js";import"./p-80de33dc.js";import"./p-83f217d4.js";import"./p-d88cb309.js";let h=null;const b=async function(e){if(h)return h;const t=await o(e);return h={secretsApi:{list:async()=>(await t.get("v1/secrets")).data,save:async e=>(await t.post("v1/secrets",e)).data,delete:async e=>{await t.delete(`v1/secrets/${e}`)}}},h};let g=class{constructor(t){e(this,t),this.secrets=[],this.listenToMessages=e=>{e.origin===window.origin&&"refreshSecrets"==e.data&&this.loadSecrets()},this.onSecretPicked=async e=>{const t=this.newSecret(e);await this.showSecretEditorInternal(t,!1)}}async componentWillLoad(){await this.loadSecrets()}async connectedCallback(){a.on(d.SecretPicked,this.onSecretPicked),a.on(d.SecretUpdated,(()=>this.loadSecrets())),window.addEventListener("message",this.listenToMessages)}async disconnectedCallback(){a.detach(d.SecretPicked,this.onSecretPicked),a.detach(d.SecretUpdated,(()=>this.loadSecrets())),window.removeEventListener("message",this.listenToMessages)}async onSecretEdit(e,t){const s={id:t.id,displayName:t.displayName,name:t.name,type:t.type,properties:this.mapProperties(t.properties)};await this.showSecretEditorInternal(s,!0)}mapProperties(e){return e.map((e=>({expressions:{Literal:e.expressions.Literal},name:e.name,isEncrypted:e.isEncrypted})))}async showSecretEditorInternal(e,t){await a.emit(d.SecretsEditor.Show,this,e,t)}newSecret(e){const t={type:e.type,displayName:e.displayName,name:e.displayName,properties:[]};for(const s of e.inputProperties)t.properties[s.name]={syntax:"",expression:""};return t}async onDeleteClick(e,t){if(!await this.confirmDialog.show("Delete Secret","Are you sure you wish to permanently delete this secret?"))return;const s=await b(this.serverUrl);await s.secretsApi.delete(t.id),await this.loadSecrets()}async loadSecrets(){const e=await b(this.serverUrl);this.secrets=await e.secretsApi.list(),await a.emit(d.SecretsLoaded,this,this.secrets)}render(){const e=this.secrets;return t("div",null,t("div",{class:"elsa-align-middle elsa-inline-block elsa-min-w-full elsa-border-b elsa-border-gray-200"},t("table",{class:"elsa-min-w-full"},t("thead",null,t("tr",{class:"elsa-border-t elsa-border-gray-200"},t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},t("span",{class:"lg:elsa-pl-2"},"Name")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},"Type"),t("th",{class:"elsa-pr-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-right elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"}))),t("tbody",{class:"elsa-bg-white elsa-divide-y elsa-divide-gray-100"},null==e?void 0:e.map((e=>{const s=t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})),i=t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),t("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),t("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),t("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),t("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}));return t("tr",null,t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900"},t("div",{class:"elsa-flex elsa-items-center elsa-space-x-3 lg:elsa-pl-2"},e.name)),t("td",{class:"elsa-px-6 elsa-py-3 elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-font-medium"},t("div",{class:"elsa-flex elsa-items-center elsa-space-x-3 lg:elsa-pl-2"},e.type)),t("td",{class:"elsa-pr-6"},t("elsa-context-menu",{history:this.history,menuItems:[{text:"Edit",clickHandler:t=>this.onSecretEdit(t,e),icon:s},{text:"Delete",clickHandler:t=>this.onDeleteClick(t,e),icon:i}]})))}))))),t("elsa-confirm-dialog",{ref:e=>this.confirmDialog=e}))}};l.injectProps(g,["serverUrl","culture","basePath"]);const{state:v}=n({secretsDescriptors:[]});let w=null,f=class{constructor(t){e(this,t),this.renderProps={},this.updateCounter=0,this.timestamp=new Date,this.t=e=>this.i18next.t(e),this.onSubmit=async e=>{e.preventDefault();const t=new FormData(e.target);this.updateSecret(t,this.secretModel);const s=await b(this.serverUrl);await s.secretsApi.save(this.secretModel),await this.hide(!0),await a.emit(d.SecretUpdated,this,this.secretModel)},this.onSecretsLoaded=async e=>{if(this.secretModel){var t=e.find((e=>e.id===this.secretModel.id));t&&(this.secretModel=t)}},this.onShowSecretEditor=async(e,t)=>{this.secretModel=JSON.parse(JSON.stringify(e)),this.secretDescriptor=v.secretsDescriptors.find((t=>t.type==e.type)),this.formContext=new m(this.secretModel,(e=>this.secretModel=e)),this.timestamp=new Date,this.renderProps={},await this.show(t)},this.show=async e=>await this.dialog.show(e),this.hide=async e=>await this.dialog.hide(e),this.onKeyDown=async e=>{e.ctrlKey&&"Enter"===e.key&&this.dialog.querySelector('button[type="submit"]').click()}}connectedCallback(){a.on(d.SecretsEditor.Show,this.onShowSecretEditor),a.on(d.SecretsLoaded,this.onSecretsLoaded)}disconnectedCallback(){a.detach(d.SecretsEditor.Show,this.onShowSecretEditor),a.detach(d.SecretsLoaded,this.onSecretsLoaded)}async componentWillLoad(){var e;const t=null!==(e=this.monacoLibPath)&&void 0!==e?e:r.monacoLibPath;await c(t),this.i18next=await u(this.culture,p)}updateSecret(e,t){const s=this.secretDescriptor.inputProperties;for(const i of s)y.update(t,i,e)}get isAuthorizeButtonVisible(){var e;if(!this.secretModel)return!1;const t=null===(e=this.secretModel.properties.find((e=>"GrantType"===e.name)))||void 0===e?void 0:e.expressions[i.Literal],s=-1===this.secretModel.properties.findIndex((e=>"Token"===e.name));return"authorization_code"===t&&s}get isAuthorizeButtonDisabled(){var e,t,s,a;const l=null===(e=this.secretModel.properties.find((e=>"AuthorizationUrl"===e.name)))||void 0===e?void 0:e.expressions[i.Literal],r=null===(t=this.secretModel.properties.find((e=>"AccessTokenUrl"===e.name)))||void 0===t?void 0:t.expressions[i.Literal],n=null===(s=this.secretModel.properties.find((e=>"ClientId"===e.name)))||void 0===s?void 0:s.expressions[i.Literal],o=null===(a=this.secretModel.properties.find((e=>"ClientSecret"===e.name)))||void 0===a?void 0:a.expressions[i.Literal];return!(l&&r&&n&&o)}async componentWillRender(){const e=this.secretDescriptor||{displayName:"",type:"",outcomes:[],category:"",browsable:!1,inputProperties:[],description:"",customAttributes:{}},t=e.inputProperties.filter((e=>!e.category||0==e.category.length));this.renderProps={secretDescriptor:e,secretModel:this.secretModel||{type:"",id:"",name:"",properties:[]},defaultProperties:t}}async onCancelClick(){await this.hide(!0)}async onGetConsentClick(e){e.preventDefault();const t=await b(this.serverUrl),s=await t.secretsApi.save(this.secretModel);this.secretModel=s;const i=await async function(e){if(w)return w;const t=await o(e);return w={oauth2Api:{getUrl:async e=>(await t.get(`v1/oauth2/url/${e}`)).data}},w}(this.serverUrl),a=await i.oauth2Api.getUrl(s.id);window.open(a,"_blank","location=yes,height=600,width=600,scrollbars=yes,status=yes")}render(){const e=this.renderProps.secretDescriptor,i=this.secretModel;return t(s,{class:"elsa-block"},t("elsa-modal-dialog",{ref:e=>this.dialog=e},t("div",{slot:"content",class:"elsa-py-8 elsa-pb-0"},t("form",{onSubmit:e=>this.onSubmit(e),key:this.timestamp.getTime().toString(),onKeyDown:this.onKeyDown,class:"activity-editor-form"},t("div",{class:"elsa-flex elsa-px-8"},t("div",{class:"elsa-space-y-8 elsa-divide-y elsa-divide-gray-200 elsa-w-full"},t("div",null,t("div",null,t("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900"},e.type),t("p",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-500"},e.description)),t("div",{class:"elsa-mt-8"},this.renderProperties(i),this.isAuthorizeButtonVisible&&t("button",{disabled:this.isAuthorizeButtonDisabled,onClick:e=>this.onGetConsentClick(e),class:"elsa-mt-6 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-w-auto sm:elsa-text-sm disabled:elsa-opacity-50"},"Authorize"))))),t("div",{class:"elsa-pt-5"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"submit",class:"elsa-ml-3 elsa-inline-flex elsa-justify-center elsa-py-2 elsa-px-4 elsa-border elsa-border-transparent elsa-shadow-sm elsa-text-sm elsa-font-medium elsa-rounded-md elsa-text-white elsa-bg-blue-600 hover:elsa-bg-blue-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},"Save"),t("button",{type:"button",onClick:()=>this.onCancelClick(),class:"elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Cancel"))))),t("div",{slot:"buttons"})))}renderProperties(e){const s=this.renderProps.defaultProperties,i=this.formContext;if(0==s.length)return;const a=`secret-settings:${e.id}`;return t("div",null,t("div",{class:"elsa-w-full"},S(i,"name","Name",e.name,"Secret's name","secretName"),S(i,"type","Type",e.type,"Secret's type","secretType",!0)),t("div",{class:"elsa-mt-6"},t("div",{key:a,class:"elsa-grid elsa-grid-cols-1 elsa-gap-y-6 elsa-gap-x-4 sm:elsa-grid-cols-6"},s.map((t=>this.renderPropertyEditor(e,t))))))}propertyChanged(e){this.updateCounter++,(null==e?void 0:e.isEncrypted)&&(e.isEncrypted=!1)}renderPropertyEditor(e,s){var i=e.properties.find((e=>e.name===s.name));const a=`secret-property-input:${e.id}:${s.name}`,l=y.display(e,s,null,null==i?void 0:i.isEncrypted);return t("elsa-control",{key:a,id:`${s.name}Control`,class:"sm:elsa-col-span-6",content:l,onChange:()=>this.propertyChanged(i)})}};const x=e=>{const t=e.color||"sky";return`<span class="elsa-rounded-lg elsa-inline-flex elsa-p-3 elsa-bg-${t}-50 elsa-text-${t}-700 elsa-ring-4 elsa-ring-white">\n      <svg class="elsa-h-6 elsa-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">\n        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="21 12 17 12 14 20 10 4 7 12 3 12"/>\n      </svg>\n    </span>`},k={category:"AMPQ",customAttributes:{},description:"AMPQ connection string",displayName:"AMPQ",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Hostname",name:"hostname",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Port",name:"port",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"User",name:"user",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Transport Type",name:"transport_type",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"AMPQ"},P={category:"Sql",customAttributes:{},description:"Sql connection string",displayName:"PostgreSql",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Host",name:"Host",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Port",name:"Port",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Database",name:"Database",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Username",name:"Username",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"Password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Additional Settings",name:"AdditionalSettings",hint:"The content entered will be appended to the end of the generated connection string.",order:20,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"PostgreSql"},L={category:"Sql",customAttributes:{},description:"Sql connection string",displayName:"MSSQL Server",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Data Source",name:"Data Source",hint:"FQDN/IP to Server",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Initial Catalog",name:"Initial Catalog",hint:"Database name",order:1,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"User ID",name:"User ID",hint:"Username for connection",order:2,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"Password",hint:"Password for connection",order:3,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Connection Timeout",name:"Connection Timeout",hint:"The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error.",order:5,defaultValue:15,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Integrated Security",name:"Integrated Security",hint:"When false, User ID and Password are specified in the connection. When true, the current Windows account credentials are used for authentication. (Default: False)",order:6,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Persist Security Info",name:"Persist Security Info",hint:"When set to False (strongly recommended), security-sensitive information, such as the password, is not returned as part of the connection if the connection is open or has ever been in an open state. (Default: False)",order:7,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Pooling",name:"Pooling",hint:"When the value of this key is set to true, any newly created connection will be added to the pool when closed by the application. In a next attempt to open the same connection, that connection will be drawn from the pool. (Default: True)",order:8,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Trust Server Certificate",name:"TrustServerCertificate",hint:"When set to true, SSL is used to encrypt the channel when bypassing walking the certificate chain to validate trust. If Trust Server Certificate is set to true and Encrypt is set to false, the channel is not encrypted. (Default: False)",order:9,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Encrypt",name:"Encrypt",hint:"When true, SQL Server uses SSL encryption for all data sent between the client and server if the server has a certificate installed. (Default: False)",order:10,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Multiple Active Result Sets",name:"MultipleActiveResultSets",hint:"When true, an application can maintain multiple active result sets. When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection. (Default: False)",order:11,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Application Name",name:"Application Name",hint:"The name of the application",order:12,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Application Intent",name:"ApplicationIntent",hint:"Declares the application workload type when connecting to a server. (Default: ReadWrite)",order:13,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"Read/Write",value:"ReadWrite"},{text:"Read Only",value:"ReadOnly"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Asynchronous Processing",name:"Async",hint:"Enables asynchronous operation support. (Default: False)",order:14,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Load Balance Timeout",name:"Load Balance Timeout",hint:"When a connection is returned to the pool, its creation time is compared with the current time, and the connection is destroyed if that time span (in seconds) exceeds the value specified by Load Balance Timeout. (Default: 0)",order:5,defaultValue:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Connect Retry Count",name:"ConnectRetryCount",hint:"Controls the number of reconnection attempts after the client identifies an idle connection failure. (Default: 1)",order:5,defaultValue:1,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Connect Retry Interval",name:"ConnectRetryInterval",hint:"Specifies the time between each connection retry attempt. Valid values are 1 to 60 seconds (Default: 10).",order:5,defaultValue:10,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Multi Subnet Failover",name:"MultiSubnetFailover",hint:"Multi Subnet Failover configures SqlClient to provide faster detection of and connection to the (currently) active server. (Default: False)",order:14,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"",value:null},{text:"True",value:"True"},{text:"False",value:"False"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Additional Settings",name:"AdditionalSettings",hint:"The content entered will be appended to the end of the generated connection string.",order:20,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"MSSQLServer"},R={category:"Sql",customAttributes:{},description:"Sql connection string",displayName:"MySQL Server",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Server",name:"server",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Port",name:"port",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Database",name:"database",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"User ID",name:"user id",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Allow Load Local Infile",name:"AllowLoadLocalInfile",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"SSL Mode",name:"SSL Mode",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"SSL Mode",name:"SSL Mode",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Certificate File",name:"CertificateFile",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Certificate Password",name:"CertificatePassword",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Use Affected Rows",name:"UseAffectedRows",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Use Compression",name:"UseCompression",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Pooling",name:"Pooling",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Integrated Security",name:"IntegratedSecurity",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Connection Timeout",name:"Connection Timeout",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Additional Settings",name:"AdditionalSettings",hint:"The content entered will be appended to the end of the generated connection string.",order:20,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"MySQLServer"},W={category:"Http",customAttributes:{},description:"Authorization token",displayName:"Authorization",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Authorization",name:"Authorization",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"Authorization"},C={category:"Http",customAttributes:{},description:"OAuth2 credentials",displayName:"OAuth2 credentials",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Grant Type",name:"GrantType",order:0,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"Client Credentials",value:"client_credentials"},{text:"Authorization Code",value:"authorization_code"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Authorization URL",name:"AuthorizationUrl",order:0,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Access Token URL",name:"AccessTokenUrl",order:1,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Client ID",name:"ClientId",order:2,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Client Secret",name:"ClientSecret",order:3,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Token endpoint client authentication method",name:"ClientAuthMethod",order:4,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"dropdown",options:{isFlagsEnum:!1,items:[{text:"Client secret: Basic",value:"client_secret_basic"},{text:"Client secret: Post",value:"client_secret_post"}]}},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Scope",name:"Scope",order:5,supportedSyntaxes:["Literal"],type:"System.String",uiHint:"single-line"}],type:"OAuth2"};let H=class{constructor(t){e(this,t),this.selectedTrait=7,this.selectedCategory="All",this.categories=[],this.filteredSecretsDescriptorDisplayContexts=[],this.onShowSecretsPicker=async()=>{await this.dialog.show(!0)}}connectedCallback(){a.on(d.ShowSecretsPicker,this.onShowSecretsPicker)}disconnectedCallback(){a.detach(d.ShowSecretsPicker,this.onShowSecretsPicker)}componentWillRender(){const e=[k,P,L,R,W,C];v.secretsDescriptors=e,this.categories=["All",...e.map((e=>e.category)).distinct().sort()];const s=this.searchText?this.searchText.toLowerCase():"";let i=e;i=s.length>0?i.filter((e=>{const t=e.description||"",i=e.displayName||"",a=e.type||"";return(e.category||"").toLowerCase().indexOf(s)>=0||t.toLowerCase().indexOf(s)>=0||i.toLowerCase().indexOf(s)>=0||a.toLowerCase().indexOf(s)>=0})):this.selectedCategory&&"All"!=this.selectedCategory?i.filter((e=>e.category==this.selectedCategory)):i,this.filteredSecretsDescriptorDisplayContexts=i.map((e=>({secretDescriptor:e,secretIcon:t(x,{color:"rose"})})))}selectTrait(e){this.selectedTrait=e}selectCategory(e){this.selectedCategory=e}onTraitClick(e,t){e.preventDefault(),this.selectTrait(t)}onCategoryClick(e,t){e.preventDefault(),this.selectCategory(t)}onSearchTextChange(e){this.searchText=e.target.value}async onCancelClick(){await this.dialog.hide(!0)}async onSecretClick(e,t){e.preventDefault(),a.emit(d.SecretPicked,this,t),await this.dialog.hide(!1)}render(){const e=this.filteredSecretsDescriptorDisplayContexts,i=this.categories;return t(s,{class:"elsa-block"},t("elsa-modal-dialog",{ref:e=>this.dialog=e},t("div",{slot:"content",class:"elsa-py-8"},t("div",{class:"elsa-flex"},t("div",{class:"elsa-px-8"},t("nav",{class:"elsa-space-y-1","aria-label":"Sidebar"},i.map((e=>t("a",{href:"#",onClick:t=>this.onCategoryClick(t,e),class:(e==this.selectedCategory?"elsa-bg-gray-100 elsa-text-gray-900 elsa-flex":"elsa-text-gray-600 hover:elsa-bg-gray-50 hover:elsa-text-gray-900")+" elsa-text-gray-600 hover:elsa-bg-gray-50 hover:elsa-text-gray-900 elsa-flex elsa-items-center elsa-px-3 elsa-py-2 elsa-text-sm elsa-font-medium elsa-rounded-md"},t("span",{class:"elsa-truncate"},e)))))),t("div",{class:"elsa-flex-1 elsa-pr-8"},t("div",{class:"elsa-p-0 elsa-mb-6"},t("div",{class:"elsa-relative elsa-rounded-md elsa-shadow-sm"},t("div",{class:"elsa-absolute elsa-inset-y-0 elsa-left-0 elsa-pl-3 elsa-flex elsa-items-center elsa-pointer-events-none"},t("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-gray-400",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("circle",{cx:"10",cy:"10",r:"7"}),t("line",{x1:"21",y1:"21",x2:"15",y2:"15"}))),t("input",{type:"text",value:this.searchText,onInput:e=>this.onSearchTextChange(e),class:"form-input elsa-block elsa-w-full elsa-pl-10 sm:elsa-text-sm sm:elsa-leading-5 focus:elsa-ring-blue-500 focus:elsa-border-blue-500 elsa-rounded-md elsa-border-gray-300",placeholder:"Search secrets"}))),t("div",{class:"elsa-max-w-4xl elsa-mx-auto elsa-p-0"},i.map((s=>{const i=e.filter((e=>e.secretDescriptor.category==s));if(0!=i.length)return t("div",null,t("h2",{class:"elsa-my-4 elsa-text-lg elsa-leading-6 elsa-font-medium"},s),t("div",{class:"elsa-divide-y elsa-divide-gray-200 sm:elsa-divide-y-0 sm:elsa-grid sm:elsa-grid-cols-2 sm:elsa-gap-px"},i.map((e=>t("a",{href:"#",onClick:t=>this.onSecretClick(t,e.secretDescriptor),class:"elsa-relative elsa-rounded elsa-group elsa-p-6 focus-within:elsa-ring-2 focus-within:elsa-ring-inset focus-within:elsa-ring-blue-500"},t("div",{class:"elsa-flex elsa-space-x-10"},t("div",{class:"elsa-flex elsa-flex-0 elsa-items-center"},t("div",{innerHTML:e.secretIcon})),t("div",{class:"elsa-flex-1 elsa-mt-2"},t("h3",{class:"elsa-text-lg elsa-font-medium"},t("a",{href:"#",class:"focus:elsa-outline-none"},t("span",{class:"elsa-absolute elsa-inset-0","aria-hidden":"true"}),e.secretDescriptor.displayName)),t("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},e.secretDescriptor.description))))))))})))))),t("div",{slot:"buttons"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"button",onClick:()=>this.onCancelClick(),class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Cancel")))))}};export{g as elsa_credential_manager_list_screen,f as elsa_secret_editor_modal,H as elsa_secrets_picker_modal};