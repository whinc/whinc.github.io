"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5107],{3055:(e,n,t)=>{t.d(n,{f:()=>r});var a=t(7462),o=t(633),l=t(7294);function r(e){const n=l.forwardRef(((n,t)=>e(n,t)));return function e(t){let{modalProps:r,...s}=t;const[c,m]=(0,l.useState)(!1),[i,u]=(0,l.useState)({}),[d,p]=(0,l.useState)({}),f=(0,l.useRef)(),M=(0,l.useCallback)((()=>{m(!1),u({}),p({})}),[]),y=(0,l.useMemo)((()=>({close:M,state:i,setState:u,ref:f})),[M,i]);(0,l.useEffect)((()=>(e.show=e=>{m(!0),p((()=>e))},()=>{e.show=null})),[]);const{modalProps:g={},...k}=(0,l.useMemo)((()=>"function"==typeof d?d(y):d),[y,d]),Z={maskClosable:!1,destroyOnClose:!0,onCancel:M,onOk:M};return l.createElement(o.Z,(0,a.Z)({},Z,r,g,{open:c}),l.createElement(n,(0,a.Z)({ref:f},s,k)))}}},6061:(e,n,t)=>{t.d(n,{Z:()=>M});const a='import { Button, message } from "antd";\nimport React, { useRef } from "react";\nimport { MyModal, MyModalInstance } from "./MyModal";\n\nexport default function App() {\n  const ref = useRef<MyModalInstance>(null);\n  return (\n    <>\n      <Button\n        onClick={() =>\n          ref.current?.open({\n            value: "hello world!",\n            modalProps: {\n              onCancel: ref.current.close,\n              onOk: async () => {\n                message.success("ok");\n                ref.current?.close();\n              },\n            },\n          })\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal ref={ref} />\n    </>\n  );\n}\n',o='import { Modal, ModalProps } from "antd";\nimport React, { useCallback, useImperativeHandle, useState } from "react";\nimport { ContentProps } from "./MyModalContent";\n\nexport interface MyModalProps {\n  onSuccess?(): void;\n}\n\nexport interface MyModalInstance {\n  open(payload?: Payload): void;\n  close(): void;\n}\n\ntype Payload = ContentProps & { modalProps?: ModalProps };\n\nexport const MyModal = React.forwardRef<MyModalInstance, MyModalProps>(\n  ({ onSuccess }, ref) => {\n    const [open, setOpen] = useState(false);\n    const [payload, setPayload] = useState<Payload>({});\n\n    const onOk = useCallback(async () => {\n      onSuccess?.();\n    }, [onSuccess]);\n\n    const openModal = useCallback((_payload = {}) => {\n      setOpen(true);\n      setPayload(_payload);\n    }, []);\n\n    const closeModal = useCallback(() => {\n      setOpen(false);\n      // reset payload\n      setPayload({});\n    }, []);\n\n    useImperativeHandle(\n      ref,\n      () => ({\n        open: openModal,\n        close: closeModal,\n      }),\n      [open]\n    );\n\n    return (\n      <Modal {...payload.modalProps} open={open}>\n        <div>{payload.value}</div>\n      </Modal>\n    );\n  }\n);\n';var l=t(3945),r=t(5162),s=t(4866),c=t(7294),m=t(1577),i=t(7790),u=t(7462),d=t(633);const p=c.forwardRef(((e,n)=>{let{onSuccess:t}=e;const[a,o]=(0,c.useState)(!1),[l,r]=(0,c.useState)({}),s=((0,c.useCallback)((async()=>{t?.()}),[t]),(0,c.useCallback)((function(e){void 0===e&&(e={}),o(!0),r(e)}),[])),m=(0,c.useCallback)((()=>{o(!1),r({})}),[]);return(0,c.useImperativeHandle)(n,(()=>({open:s,close:m})),[a]),c.createElement(d.Z,(0,u.Z)({},l.modalProps,{open:a}),c.createElement("div",null,l.value))}));function f(){const e=(0,c.useRef)(null);return c.createElement(c.Fragment,null,c.createElement(m.ZP,{onClick:()=>e.current?.open({value:"hello world!",modalProps:{onCancel:e.current.close,onOk:async()=>{i.ZP.success("ok"),e.current?.close()}}})},"\u663e\u793a\u5f39\u7a97"),c.createElement(p,{ref:e}))}function M(){return c.createElement(s.Z,null,c.createElement(r.Z,{value:"2",label:"App"},c.createElement(l.Z,{language:"tsx"},a)),c.createElement(r.Z,{value:"3",label:"MyModal"},c.createElement(l.Z,{language:"tsx"},o)),c.createElement(r.Z,{value:"1",label:"\u6548\u679c"},c.createElement(f,null)))}},9203:(e,n,t)=>{t.d(n,{Z:()=>p});const a='import { Button, message } from "antd";\nimport React from "react";\nimport MyModal from "./MyModal";\n\nexport default function App() {\n  return (\n    <>\n      <Button\n        onClick={() =>\n          MyModal.show(({ close }) => ({\n            value: \'hello world!\',\n            modalProps: {\n              onCancel: close,\n              onOk: async () => {\n                message.success("ok");\n                close()\n              },\n            },\n          }))\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal />\n    </>\n  );\n}\n',o='import React from "react";\nimport { createModal } from "../createModal";\n\nexport interface ContentProps {\n  value?: any;\n}\n\nexport default createModal(function MyModalContent(props: ContentProps) {\n  return <div>{props.value}</div>;\n});\n';var l=t(3945),r=t(5162),s=t(4866),c=t(7294),m=t(1577),i=t(7790);const u=(0,t(3055).f)((function(e){return c.createElement("div",null,e.value)}));function d(){return c.createElement(c.Fragment,null,c.createElement(m.ZP,{onClick:()=>u.show((e=>{let{close:n}=e;return{value:"hello world!",modalProps:{onCancel:n,onOk:async()=>{i.ZP.success("ok"),n()}}}}))},"\u663e\u793a\u5f39\u7a97"),c.createElement(u,null))}function p(){return c.createElement(s.Z,null,c.createElement(r.Z,{value:"2",label:"App"},c.createElement(l.Z,{language:"tsx"},a)),c.createElement(r.Z,{value:"3",label:"MyModal"},c.createElement(l.Z,{language:"tsx"},o)),c.createElement(r.Z,{value:"1",label:"\u6548\u679c"},c.createElement(d,null)))}},6310:(e,n,t)=>{t.d(n,{Z:()=>g});const a='import { Button, message } from "antd";\nimport React from "react";\nimport MyModal from "./MyModal";\n\nconst mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));\n\nexport default function App() {\n  return (\n    <>\n      <Button\n        onClick={() =>\n          MyModal.show(({ close, state, setState, ref }) => ({\n            initialValues: {\n              name: "zhangsan",\n              age: 20,\n            },\n            modalProps: {\n              title: "\u6ce8\u518c\u7528\u6237",\n              confirmLoading: state.loading,\n              onCancel: close,\n              onOk: async () => {\n                setState({ loading: true });\n                const formData = await ref.current.submit();\n                await mockRequest(formData);\n                setState({ loading: false });\n                message.success("\u63d0\u4ea4\u8868\u5355\uff1a" + JSON.stringify(formData));\n                close();\n              },\n            },\n          }))\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal />\n    </>\n  );\n}\n',o='import { Form, Input, InputNumber } from "antd";\nimport React, { useImperativeHandle } from "react";\nimport { createModal } from "../createModal";\n\nexport interface ContentProps {\n  initialValues?: any;\n}\n\nexport interface ContentInstance {\n  submit(): Promise<void>;\n}\n\nexport default createModal(function MyModalContent(\n  props: ContentProps,\n  ref: React.MutableRefObject<ContentInstance>\n) {\n  const [form] = Form.useForm();\n\n  useImperativeHandle(ref, () => ({\n    async submit() {\n      return await form.validateFields();\n    },\n  }));\n  return (\n    <Form form={form} initialValues={props.initialValues}>\n      <Form.Item name={"name"} label="\u59d3\u540d">\n        <Input />\n      </Form.Item>\n      <Form.Item name={"age"} label="\u5e74\u9f84">\n        <InputNumber />\n      </Form.Item>\n    </Form>\n  );\n});\n';var l=t(3945),r=t(5162),s=t(4866),c=t(7294),m=t(1577),i=t(7790),u=t(5411),d=t(8270),p=t(9627);const f=(0,t(3055).f)((function(e,n){const[t]=u.Z.useForm();return(0,c.useImperativeHandle)(n,(()=>({submit:async()=>await t.validateFields()}))),c.createElement(u.Z,{form:t,initialValues:e.initialValues},c.createElement(u.Z.Item,{name:"name",label:"\u59d3\u540d"},c.createElement(d.Z,null)),c.createElement(u.Z.Item,{name:"age",label:"\u5e74\u9f84"},c.createElement(p.Z,null)))})),M=e=>new Promise((e=>setTimeout(e,2e3)));function y(){return c.createElement(c.Fragment,null,c.createElement(m.ZP,{onClick:()=>f.show((e=>{let{close:n,state:t,setState:a,ref:o}=e;return{initialValues:{name:"zhangsan",age:20},modalProps:{title:"\u6ce8\u518c\u7528\u6237",confirmLoading:t.loading,onCancel:n,onOk:async()=>{a({loading:!0});const e=await o.current.submit();await M(e),a({loading:!1}),i.ZP.success("\u63d0\u4ea4\u8868\u5355\uff1a"+JSON.stringify(e)),n()}}}}))},"\u663e\u793a\u5f39\u7a97"),c.createElement(f,null))}function g(){return c.createElement(s.Z,null,c.createElement(r.Z,{value:"2",label:"App"},c.createElement(l.Z,{language:"tsx"},a)),c.createElement(r.Z,{value:"3",label:"MyModal"},c.createElement(l.Z,{language:"tsx"},o)),c.createElement(r.Z,{value:"1",label:"\u6548\u679c"},c.createElement(y,null)))}},2166:(e,n,t)=>{t.d(n,{Z:()=>v});const a='import NiceModal from "@ebay/nice-modal-react";\nimport { Button, message } from "antd";\nimport React from "react";\nimport MyModal, { MyModalProps } from "./MyModal";\n\nconst mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));\nexport default function App() {\n  return (\n    <NiceModal.Provider>\n      <Button\n        onClick={() => {\n          NiceModal.show<any>(MyModal, {\n            initialValues: {\n              name: "zhangsan",\n              age: 20,\n            },\n            async onSubmit(values) {\n              await mockRequest(values);\n              message.success("\u63d0\u4ea4\u8868\u5355\uff1a" + JSON.stringify(values));\n            },\n          } as MyModalProps).then(\n            (value) => message.info(JSON.stringify(value)),\n            (error) => {\n              message.error(String(error));\n            }\n          );\n        }}\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n    </NiceModal.Provider>\n  );\n}\n',o='import NiceModal, { useModal } from "@ebay/nice-modal-react";\nimport { Form, Input, InputNumber, message, Modal } from "antd";\nimport React, { useState } from "react";\n\nexport interface MyModalProps {\n  initialValues?: any;\n  onSubmit?: (values: any) => Promise<any>;\n}\n\nexport default NiceModal.create(function MyModal(props: MyModalProps) {\n  const [form] = Form.useForm();\n  const modal = useModal();\n  const [loading, setLoading] = useState(false);\n  return (\n    <Modal\n      {...NiceModal.antdModal(modal)}\n      title="\u6ce8\u518c\u7528\u6237"\n      confirmLoading={loading}\n      onOk={() => {\n        form\n          .validateFields()\n          .then((formData) => {\n            setLoading(true);\n            return props.onSubmit(formData);\n          })\n          .then(\n            () => {\n              setLoading(false);\n              modal.hide();\n              modal.resolve();\n            },\n            (error) => {\n              message.error(String(error));\n              setLoading(false);\n            }\n          );\n      }}\n    >\n      <Form form={form} initialValues={props.initialValues}>\n        <Form.Item name={"name"} label="\u59d3\u540d">\n          <Input />\n        </Form.Item>\n        <Form.Item name={"age"} label="\u5e74\u9f84">\n          <InputNumber />\n        </Form.Item>\n      </Form>\n    </Modal>\n  );\n});\n';var l=t(3945),r=t(5162),s=t(4866),c=t(7294),m=t(5362),i=t(1577),u=t(7790),d=t(7462),p=t(5411),f=t(633),M=t(8270),y=t(9627);const g=m.ZP.create((function(e){const[n]=p.Z.useForm(),t=(0,m.dd)(),[a,o]=(0,c.useState)(!1);return c.createElement(f.Z,(0,d.Z)({},m.ZP.antdModal(t),{title:"\u6ce8\u518c\u7528\u6237",confirmLoading:a,onOk:()=>{n.validateFields().then((n=>(o(!0),e.onSubmit(n)))).then((()=>{o(!1),t.hide(),t.resolve()}),(e=>{u.ZP.error(String(e)),o(!1)}))}}),c.createElement(p.Z,{form:n,initialValues:e.initialValues},c.createElement(p.Z.Item,{name:"name",label:"\u59d3\u540d"},c.createElement(M.Z,null)),c.createElement(p.Z.Item,{name:"age",label:"\u5e74\u9f84"},c.createElement(y.Z,null))))})),k=e=>new Promise((e=>setTimeout(e,2e3)));function Z(){return c.createElement(m.ZP.Provider,null,c.createElement(i.ZP,{onClick:()=>{m.ZP.show(g,{initialValues:{name:"zhangsan",age:20},async onSubmit(e){await k(e),u.ZP.success("\u63d0\u4ea4\u8868\u5355\uff1a"+JSON.stringify(e))}}).then((e=>u.ZP.info(JSON.stringify(e))),(e=>{u.ZP.error(String(e))}))}},"\u663e\u793a\u5f39\u7a97"))}function v(){return c.createElement(s.Z,null,c.createElement(r.Z,{value:"2",label:"App"},c.createElement(l.Z,{language:"tsx"},a)),c.createElement(r.Z,{value:"3",label:"MyModal"},c.createElement(l.Z,{language:"tsx"},o)),c.createElement(r.Z,{value:"1",label:"\u6548\u679c"},c.createElement(Z,null)))}},3945:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(814);function l(e){return a.createElement(a.Fragment,null,a.createElement(o.Z,e))}},929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>M});var a=t(7462),o=(t(7294),t(3905)),l=t(6061),r=t(3945),s=t(9533),c=t(9203),m=t(6310),i=t(2166);const u={tags:["antd","react"],keywords:["antd","modal"]},d="Antd \u5f39\u7a97\u5c01\u88c5",p={permalink:"/blog/2023/antd-create-modal",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2023/antd-create-modal/index.md",source:"@site/blog/2023/antd-create-modal/index.md",title:"Antd \u5f39\u7a97\u5c01\u88c5",description:"\u5728 Antd \u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0c\u4e00\u4e2a\u597d\u7528\u7684\u5f39\u7a97\u6211\u8ba4\u4e3a\u5e94\u8be5\u5177\u5907\u51e0\u4e2a\u7279\u70b9\uff1a",date:"2023-03-09T09:16:32.000Z",formattedDate:"March 9, 2023",tags:[{label:"antd",permalink:"/blog/tags/antd"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.35,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["antd","react"],keywords:["antd","modal"]},nextItem:{title:"\u5982\u4f55\u642d\u5efa\u535a\u5ba2\u7ad9\u70b9",permalink:"/blog/2023/how-to-setup-blog"}},f={authorsImageUrls:[]},M=[{value:"\u7b2c\u4e00\u7248",id:"\u7b2c\u4e00\u7248",level:2},{value:"\u7b2c\u4e8c\u7248",id:"\u7b2c\u4e8c\u7248",level:2},{value:"\u7b2c\u4e09\u7248",id:"\u7b2c\u4e09\u7248",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],y={toc:M},g="wrapper";function k(e){let{components:n,...t}=e;return(0,o.kt)(g,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Antd \u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0c\u4e00\u4e2a\u597d\u7528\u7684\u5f39\u7a97\u6211\u8ba4\u4e3a\u5e94\u8be5\u5177\u5907\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u652f\u6301\u547d\u4ee4\u5f0f\u8c03\u7528\uff0c\u7c7b\u4f3c",(0,o.kt)("inlineCode",{parentName:"li"},"window.alert()"),"\u8fd9\u79cd\u65b9\u5f0f\uff08\u65e0\u9700\u5173\u6ce8\u5f39\u7a97\u7684\u58f0\u660e\u4f4d\u7f6e\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u80fd\u591f\u4e0e\u5f39\u7a97\u8fdb\u884c\u4ea4\u4e92\uff0c\u5373\u63d0\u4f9b\u53c2\u6570\u63a7\u5236\u5f39\u7a97\u7684\u6e32\u67d3\uff0c\u540c\u65f6\u5f39\u7a97\u5173\u95ed\u65f6\u80fd\u4ece\u4e2d\u83b7\u53d6\u6240\u9700\u6570\u636e\uff08\u8fd9\u4e2a\u5728\u8868\u5355\u573a\u666f\u5e38\u89c1\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u7684\u72b6\u6001\u4e0e\u5176\u6240\u5728\u7ec4\u4ef6\u6811\u9694\u79bb\uff08\u907f\u514d\u72b6\u6001\u6c61\u67d3\uff09")),(0,o.kt)("p",null,"Antd \u63d0\u4f9b\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://4x.ant.design/components/modal-cn/#Modal.method()"},"Modal.method()")," \u5f88\u597d\u7684\u5904\u7406\u4e86\u7b2c 1 \u548c 3 \u4e2a\u95ee\u9898\uff0c\u4f7f\u7528\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Modal.confirm({\n    title: '\u786e\u8ba4\uff1f',\n    content: <MyModalContent>,\n    onOk () {\n        // do something\n    }\n})\n")),(0,o.kt)("p",null,"\u4f46\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Modal.method()"),"\u5e76\u672a\u89e3\u51b3\u7b2c 2 \u4e2a\u95ee\u9898\uff0c\u5176\u5185\u5bb9\u5c55\u793a\u540e\u5c31\u4e0e\u5f53\u524d\u4e0a\u4e0b\u6587\u8131\u79bb\u8054\u7cfb\u4e86\uff0c\u4e3a\u4e86\u5b9e\u73b0\u6240\u671f\u671b\u7684\u5f39\u7a97\uff0c\u4e0b\u9762\u6211\u5c1d\u8bd5\u4e86\u51e0\u79cd\u5c01\u88c5\u65b9\u5f0f\uff0c\u8bd5\u56fe\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u7b2c\u4e00\u7248"},"\u7b2c\u4e00\u7248"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u5c01\u88c5\u7684\u7b2c\u4e00\u7248\u5f39\u7a97\uff0c\u5f39\u7a97\u901a\u8fc7\u66b4\u9732 ref \u5f15\u7528\uff0c\u8ba9\u5916\u90e8\u63a7\u5236\u5f39\u7a97\u7684\u663e\u793a\uff0c\u4ee5\u53ca\u4f20\u9012\u6570\u636e\u7ed9\u5f39\u7a97\u5bb9\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5c06\u5f39\u7a97\u5185\u90e8\u7684\u5904\u7406\u7ed3\u679c\u4f20\u9012\u7ed9\u5916\u90e8\u3002"),(0,o.kt)(l.Z,{mdxType:"Demo1"}),(0,o.kt)("h2",{id:"\u7b2c\u4e8c\u7248"},"\u7b2c\u4e8c\u7248"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u9762\u5f39\u7a97\u7684\u5c01\u88c5\u6a21\u5f0f\uff0c\u6839\u636e\u9700\u8981\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6269\u5c55\uff0c\u57fa\u672c\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u5f39\u7a97\u4f7f\u7528\u573a\u666f\u4e86\u3002\u4f46\u662f\u4e0a\u9762\u5c01\u88c5\u65b9\u5f0f\u6709\u4e0d\u5c11\u6837\u677f\u4ee3\u7801\uff0c\u6bcf\u6b21\u5199\u4e2a\u5f39\u7a97\u6709\u4e0d\u5c11\u91cd\u590d\u5de5\u4f5c\uff0c\u4e8e\u662f\u5c06\u5bf9\u5f39\u7a97\u7684\u5c01\u88c5\u6a21\u5f0f\u5265\u79bb\u51fa\u6765\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"createModal"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u6837\u677f\u4ee3\u7801\uff0c\u805a\u7126\u4e8e\u7f16\u5199\u5f39\u7a97\u7684\u5185\u5bb9\u548c\u4ea4\u4e92\u903b\u8f91\u3002"),(0,o.kt)(r.Z,{language:"tsx",mdxType:"CodeBlock"},s.Z),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"createModal")," \u521b\u5efa\u5f39\u7a97\u7684\u793a\u4f8b\uff0c\u53ef\u4ee5\u770b\u5230\u5f39\u7a97\u7684\u6e90\u7801\u5df2\u7ecf\u51cf\u5c11\u5230\u4e00\u884c\u4ee3\u7801\u4e86\uff0c\u5199\u5f39\u7a97\u65f6\u53ea\u9700\u8981\u5173\u6ce8\u4e8e\u5f39\u7a97\u7684\u5185\u5bb9\u533a\u57df\uff0c\u4f7f\u7528\u5f39\u7a97\u65f6\u4e5f\u65e0\u9700\u521b\u5efa ref \u6765\u5f15\u7528\u5f39\u7a97\uff0c\u800c\u662f\u901a\u8fc7\u5f39\u7a97\u4e0a\u66b4\u9732\u7684\u9759\u6001\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"MyModal.show()"),"\u663e\u793a\u5f39\u7a97\u548c\u4f20\u53c2\u3002"),(0,o.kt)(c.Z,{mdxType:"Demo2"}),(0,o.kt)("p",null,"\u7ecf\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"createModal"),"\u5c01\u88c5\u540e\uff0c\u4e1a\u52a1\u5c42\u53ea\u9700\u5173\u6ce8\u5f39\u7a97\u7684\u5185\u5bb9\uff08\u5373",(0,o.kt)("inlineCode",{parentName:"p"},"<Modal>"),"\u7684\u5b50\u7ec4\u4ef6\uff09\uff0c\u65e0\u9700\u5904\u7406\u5f39\u7a97\u4e0e\u5185\u5bb9\u7684\u4ea4\u4e92\u3002 \u90a3\u4f7f\u7528\u65f6\u5982\u4f55\u63a7\u5236\u5f39\u7a97\u7684\u4ea4\u4e92\u5462\uff1f\u4f8b\u5982\u70b9\u51fb\u786e\u8ba4\u65f6\u83b7\u53d6\u5f39\u7a97\u4e2d\u7684\u8868\u5355\u5185\u5bb9\u3001\u70b9\u51fb\u786e\u8ba4\u65f6\u5f39\u7a97\u6309\u94ae\u663e\u793a loading \u6548\u679c\u7b49\u3002"),(0,o.kt)("p",null,"\u7b54\u6848\u662f\u901a\u8fc7\u5f39\u7a97\u66b4\u9732\u7684\u9759\u6001\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"MyModal.show()"),"\u5b9e\u73b0\uff0c\u8bf7\u770b\u4e0b\u9762\u4f8b\u5b50\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"state/setState"),"\u53ef\u4ee5\u5728\u5f39\u7a97\u7ec4\u4ef6\u5185\u90e8\u5b58\u50a8\u72b6\u6001\uff0c\u901a\u8fc7 ref \u53ef\u4ee5\u8c03\u7528\u5f39\u7a97\u5185\u5bb9\u7ec4\u4ef6\u66b4\u9732\u7684\u65b9\u6cd5\u3002"),(0,o.kt)(m.Z,{mdxType:"Demo3"}),(0,o.kt)("h2",{id:"\u7b2c\u4e09\u7248"},"\u7b2c\u4e09\u7248"),(0,o.kt)("p",null,"\u5076\u7136\u6d4f\u89c8\u77e5\u4e4e\u770b\u5230",(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/552965494"},"\u8fd9\u7bc7\u6587\u7ae0"),"\uff0c\u624d\u5f97\u77e5\u5df2\u7ecf\u6709\u4eba\u505a\u4e86\u7c7b\u4f3c\u7684\u5de5\u4f5c\uff0c\u5e76\u4e14\u5f00\u6e90\u4e86\u53eb ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eBay/nice-modal-react"},"nice-modal-react"),"\uff0c\u5176\u539f\u7406\u662f\u63d0\u4f9b\u5168\u5c40\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\u6765\u5b58\u50a8\u548c\u6e32\u67d3\u5168\u5c40\u5f39\u7a97\uff0c\u901a\u8fc7\u5176\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"create()"),"\u65b9\u6cd5\u521b\u5efa\u7684\u5f39\u7a97\u540e\uff0c\u5373\u53ef\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"show()/hide()"),"\u65b9\u6cd5\u547d\u4ee4\u5f0f\u4f7f\u7528\u5f39\u7a97\uff0c\u5f39\u7a97\u7684\u5185\u90e8\u72b6\u6001\u4e0e\u5916\u90e8\u7ec4\u4ef6\u9694\u79bb\uff0c\u5b8c\u5168\u6ee1\u8db3\u4e86\u6587\u7ae0\u5f00\u5934\u63d0\u5230\u7684\u51e0\u4e2a\u7279\u70b9\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e nice-modal-react \u5e93\u91cd\u5199\u7684\u4e0a\u9762\u4f8b\u5b50"),(0,o.kt)(i.Z,{mdxType:"Demo4"}),(0,o.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("p",null,"Antd \u7684\u5f39\u7a97\u529f\u80fd\u5f88\u591a\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u8fd8\u662f\u9700\u8981\u505a\u4e0d\u5c11\u5de5\u4f5c\uff0c\u901a\u8fc7\u5c01\u88c5 Antd \u7684\u5f39\u7a97\uff0c\u5927\u5927\u7b80\u5316\u4e86\u5f39\u7a97\u7684\u5904\u7406\u903b\u8f91\uff0c\u8ba9\u4e1a\u52a1\u5c42\u4e13\u6ce8\u4e8e\u5f39\u7a97\u7684\u5185\u5bb9\u903b\u8f91\u3002"))}k.isMDXComponent=!0},9533:(e,n,t)=>{t.d(n,{Z:()=>a});const a="import { Modal } from 'antd';\nimport React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';\n\nexport function createModal(ContentComponent) {\n  const ContentComponent2 = React.forwardRef((props, ref) => ContentComponent(props, ref));\n\n  return function NewModal({ modalProps: modalProps, ...props }) {\n    const [open, setOpen] = useState(false);\n\n    // store UI data\n    const [state, setState] = useState({});\n    const [payload, setPayload] = useState({});\n    const ref = useRef();\n\n    const close = useCallback(() => {\n      setOpen(false);\n      // reset\n      setState({});\n      setPayload({});\n    }, []);\n\n    const actions = useMemo(() => ({ close, state, setState, ref }), [close, state]);\n\n    useEffect(() => {\n      const show = (_payload) => {\n        setOpen(true);\n        setPayload(() => _payload);\n      };\n      NewModal.show = show;\n      return () => {\n        NewModal.show = null;\n      };\n    }, []);\n\n    const { modalProps: modalProps2 = {}, ...props2 } = useMemo(\n      () => (typeof payload === 'function' ? payload(actions) : payload),\n      [actions, payload],\n    );\n\n    /** @type {import('antd').ModalProps} */\n    const defaultModalProps = {\n      maskClosable: false,\n      destroyOnClose: true,\n      onCancel: close,\n      onOk: close,\n    };\n    return (\n      <Modal {...defaultModalProps} {...modalProps} {...modalProps2} open={open}>\n        <ContentComponent2 ref={ref} {...props} {...props2} />\n      </Modal>\n    );\n  };\n}\n"}}]);