"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5592],{17385:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(59496),o=t(53322);function l(e){return a.createElement(a.Fragment,null,a.createElement(o.Z,e))}},95376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>H,contentTitle:()=>q,default:()=>X,frontMatter:()=>j,metadata:()=>z,toc:()=>J});var a=t(97605),o=t(59496),l=t(49613);const r='import { Button, message } from "antd";\nimport React, { useRef } from "react";\nimport { MyModal, MyModalInstance } from "./MyModal";\n\nexport default function App() {\n  const ref = useRef<MyModalInstance>(null);\n  return (\n    <>\n      <Button\n        onClick={() =>\n          ref.current?.open({\n            value: "hello world!",\n            modalProps: {\n              onCancel: ref.current.close,\n              onOk: async () => {\n                message.success("ok");\n                ref.current?.close();\n              },\n            },\n          })\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal ref={ref} />\n    </>\n  );\n}\n',s='import { Modal, ModalProps } from "antd";\nimport React, { useCallback, useImperativeHandle, useState } from "react";\nimport { ContentProps } from "./MyModalContent";\n\nexport interface MyModalProps {\n  onSuccess?(): void;\n}\n\nexport interface MyModalInstance {\n  open(payload?: Payload): void;\n  close(): void;\n}\n\ntype Payload = ContentProps & { modalProps?: ModalProps };\n\nexport const MyModal = React.forwardRef<MyModalInstance, MyModalProps>(\n  ({ onSuccess }, ref) => {\n    const [open, setOpen] = useState(false);\n    const [payload, setPayload] = useState<Payload>({});\n\n    const onOk = useCallback(async () => {\n      onSuccess?.();\n    }, [onSuccess]);\n\n    const openModal = useCallback((_payload = {}) => {\n      setOpen(true);\n      setPayload(_payload);\n    }, []);\n\n    const closeModal = useCallback(() => {\n      setOpen(false);\n      // reset payload\n      setPayload({});\n    }, []);\n\n    useImperativeHandle(\n      ref,\n      () => ({\n        open: openModal,\n        close: closeModal,\n      }),\n      [open]\n    );\n\n    return (\n      <Modal {...payload.modalProps} open={open}>\n        <div>{payload.value}</div>\n      </Modal>\n    );\n  }\n);\n';var c=t(17385),m=t(65951),d=t(30905),i=t(85247),u=t(66784),p=t(36699);const f=o.forwardRef(((e,n)=>{let{onSuccess:t}=e;const[l,r]=(0,o.useState)(!1),[s,c]=(0,o.useState)({}),m=((0,o.useCallback)((async()=>{t?.()}),[t]),(0,o.useCallback)((function(e){void 0===e&&(e={}),r(!0),c(e)}),[])),d=(0,o.useCallback)((()=>{r(!1),c({})}),[]);return(0,o.useImperativeHandle)(n,(()=>({open:m,close:d})),[l]),o.createElement(p.Z,(0,a.Z)({},s.modalProps,{open:l}),o.createElement("div",null,s.value))}));function M(){const e=(0,o.useRef)(null);return o.createElement(o.Fragment,null,o.createElement(i.ZP,{onClick:()=>e.current?.open({value:"hello world!",modalProps:{onCancel:e.current.close,onOk:async()=>{u.ZP.success("ok"),e.current?.close()}}})},"\u663e\u793a\u5f39\u7a97"),o.createElement(f,{ref:e}))}function k(){return o.createElement(d.Z,null,o.createElement(m.Z,{value:"2",label:"App"},o.createElement(c.Z,{language:"tsx"},r)),o.createElement(m.Z,{value:"3",label:"MyModal"},o.createElement(c.Z,{language:"tsx"},s)),o.createElement(m.Z,{value:"1",label:"\u6548\u679c"},o.createElement(M,null)))}const y="import { Modal } from 'antd';\nimport React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';\n\nexport function createModal(ContentComponent) {\n  const ContentComponent2 = React.forwardRef((props, ref) => ContentComponent(props, ref));\n\n  return function NewModal({ modalProps: modalProps, ...props }) {\n    const [open, setOpen] = useState(false);\n\n    // store UI data\n    const [state, setState] = useState({});\n    const [payload, setPayload] = useState({});\n    const ref = useRef();\n\n    const close = useCallback(() => {\n      setOpen(false);\n      // reset\n      setState({});\n      setPayload({});\n    }, []);\n\n    const actions = useMemo(() => ({ close, state, setState, ref }), [close, state]);\n\n    useEffect(() => {\n      const show = (_payload) => {\n        setOpen(true);\n        setPayload(() => _payload);\n      };\n      NewModal.show = show;\n      return () => {\n        NewModal.show = null;\n      };\n    }, []);\n\n    const { modalProps: modalProps2 = {}, ...props2 } = useMemo(\n      () => (typeof payload === 'function' ? payload(actions) : payload),\n      [actions, payload],\n    );\n\n    /** @type {import('antd').ModalProps} */\n    const defaultModalProps = {\n      maskClosable: false,\n      destroyOnClose: true,\n      onCancel: close,\n      onOk: close,\n    };\n    return (\n      <Modal {...defaultModalProps} {...modalProps} {...modalProps2} open={open}>\n        <ContentComponent2 ref={ref} {...props} {...props2} />\n      </Modal>\n    );\n  };\n}\n",g='import { Button, message } from "antd";\nimport React from "react";\nimport MyModal from "./MyModal";\n\nexport default function App() {\n  return (\n    <>\n      <Button\n        onClick={() =>\n          MyModal.show(({ close }) => ({\n            value: \'hello world!\',\n            modalProps: {\n              onCancel: close,\n              onOk: async () => {\n                message.success("ok");\n                close()\n              },\n            },\n          }))\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal />\n    </>\n  );\n}\n',C='import React from "react";\nimport { createModal } from "../createModal";\n\nexport interface ContentProps {\n  value?: any;\n}\n\nexport default createModal(function MyModalContent(props: ContentProps) {\n  return <div>{props.value}</div>;\n});\n';function b(e){const n=o.forwardRef(((n,t)=>e(n,t)));return function e(t){let{modalProps:l,...r}=t;const[s,c]=(0,o.useState)(!1),[m,d]=(0,o.useState)({}),[i,u]=(0,o.useState)({}),f=(0,o.useRef)(),M=(0,o.useCallback)((()=>{c(!1),d({}),u({})}),[]),k=(0,o.useMemo)((()=>({close:M,state:m,setState:d,ref:f})),[M,m]);(0,o.useEffect)((()=>(e.show=e=>{c(!0),u((()=>e))},()=>{e.show=null})),[]);const{modalProps:y={},...g}=(0,o.useMemo)((()=>"function"==typeof i?i(k):i),[k,i]),C={maskClosable:!1,destroyOnClose:!0,onCancel:M,onOk:M};return o.createElement(p.Z,(0,a.Z)({},C,l,y,{open:s}),o.createElement(n,(0,a.Z)({ref:f},r,g)))}}const v=b((function(e){return o.createElement("div",null,e.value)}));function h(){return o.createElement(o.Fragment,null,o.createElement(i.ZP,{onClick:()=>v.show((e=>{let{close:n}=e;return{value:"hello world!",modalProps:{onCancel:n,onOk:async()=>{u.ZP.success("ok"),n()}}}}))},"\u663e\u793a\u5f39\u7a97"),o.createElement(v,null))}function P(){return o.createElement(d.Z,null,o.createElement(m.Z,{value:"2",label:"App"},o.createElement(c.Z,{language:"tsx"},g)),o.createElement(m.Z,{value:"3",label:"MyModal"},o.createElement(c.Z,{language:"tsx"},C)),o.createElement(m.Z,{value:"1",label:"\u6548\u679c"},o.createElement(h,null)))}const Z='import { Button, message } from "antd";\nimport React from "react";\nimport MyModal from "./MyModal";\n\nconst mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));\n\nexport default function App() {\n  return (\n    <>\n      <Button\n        onClick={() =>\n          MyModal.show(({ close, state, setState, ref }) => ({\n            initialValues: {\n              name: "zhangsan",\n              age: 20,\n            },\n            modalProps: {\n              title: "\u6ce8\u518c\u7528\u6237",\n              confirmLoading: state.loading,\n              onCancel: close,\n              onOk: async () => {\n                setState({ loading: true });\n                const formData = await ref.current.submit();\n                await mockRequest(formData);\n                setState({ loading: false });\n                message.success("\u63d0\u4ea4\u8868\u5355\uff1a" + JSON.stringify(formData));\n                close();\n              },\n            },\n          }))\n        }\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n      <MyModal />\n    </>\n  );\n}\n',E='import { Form, Input, InputNumber } from "antd";\nimport React, { useImperativeHandle } from "react";\nimport { createModal } from "../createModal";\n\nexport interface ContentProps {\n  initialValues?: any;\n}\n\nexport interface ContentInstance {\n  submit(): Promise<void>;\n}\n\nexport default createModal(function MyModalContent(\n  props: ContentProps,\n  ref: React.MutableRefObject<ContentInstance>\n) {\n  const [form] = Form.useForm();\n\n  useImperativeHandle(ref, () => ({\n    async submit() {\n      return await form.validateFields();\n    },\n  }));\n  return (\n    <Form form={form} initialValues={props.initialValues}>\n      <Form.Item name={"name"} label="\u59d3\u540d">\n        <Input />\n      </Form.Item>\n      <Form.Item name={"age"} label="\u5e74\u9f84">\n        <InputNumber />\n      </Form.Item>\n    </Form>\n  );\n});\n';var w=t(83907),S=t(96170),N=t(87584);const x=b((function(e,n){const[t]=w.Z.useForm();return(0,o.useImperativeHandle)(n,(()=>({submit:async()=>await t.validateFields()}))),o.createElement(w.Z,{form:t,initialValues:e.initialValues},o.createElement(w.Z.Item,{name:"name",label:"\u59d3\u540d"},o.createElement(S.Z,null)),o.createElement(w.Z.Item,{name:"age",label:"\u5e74\u9f84"},o.createElement(N.Z,null)))})),I=e=>new Promise((e=>setTimeout(e,2e3)));function O(){return o.createElement(o.Fragment,null,o.createElement(i.ZP,{onClick:()=>x.show((e=>{let{close:n,state:t,setState:a,ref:o}=e;return{initialValues:{name:"zhangsan",age:20},modalProps:{title:"\u6ce8\u518c\u7528\u6237",confirmLoading:t.loading,onCancel:n,onOk:async()=>{a({loading:!0});const e=await o.current.submit();await I(e),a({loading:!1}),u.ZP.success("\u63d0\u4ea4\u8868\u5355\uff1a"+JSON.stringify(e)),n()}}}}))},"\u663e\u793a\u5f39\u7a97"),o.createElement(x,null))}function R(){return o.createElement(d.Z,null,o.createElement(m.Z,{value:"2",label:"App"},o.createElement(c.Z,{language:"tsx"},Z)),o.createElement(m.Z,{value:"3",label:"MyModal"},o.createElement(c.Z,{language:"tsx"},E)),o.createElement(m.Z,{value:"1",label:"\u6548\u679c"},o.createElement(O,null)))}const F='import NiceModal from "@ebay/nice-modal-react";\nimport { Button, message } from "antd";\nimport React from "react";\nimport MyModal from "./MyModal";\n\nconst mockRequest = (data: any) => new Promise((r) => setTimeout(r, 2000));\n\nexport default function App() {\n  return (\n    <NiceModal.Provider>\n      <Button\n        onClick={() => {\n          const props = {\n            initialValues: {\n              name: "zhangsan",\n              age: 20,\n            },\n            async onSubmit(values) {\n              const destory = message.loading(\n                "\u63d0\u4ea4\u6570\u636e\uff1a" + JSON.stringify(values)\n              );\n              await mockRequest(values);\n              destory();\n            },\n          };\n\n          NiceModal.show(MyModal, props).then(\n            () => message.success("\u63d0\u4ea4\u6210\u529f!"),\n            (error) => {\n              message.error("\u63d0\u4ea4\u5931\u8d25\uff1a" + error.message);\n            }\n          );\n        }}\n      >\n        \u663e\u793a\u5f39\u7a97\n      </Button>\n    </NiceModal.Provider>\n  );\n}\n',A='import NiceModal, { useModal } from "@ebay/nice-modal-react";\nimport { Form, Input, InputNumber, Modal } from "antd";\nimport React, { useState } from "react";\n\nexport interface MyModalProps {\n  initialValues?: any;\n  onSubmit?: (values: any) => Promise<any>;\n}\n\nexport default NiceModal.create(({ onSubmit, initialValues }: MyModalProps) => {\n  const [form] = Form.useForm();\n  const modal = useModal();\n  const [loading, setLoading] = useState(false);\n  return (\n    <Modal\n      {...NiceModal.antdModal(modal)}\n      title="\u6ce8\u518c\u7528\u6237"\n      confirmLoading={loading}\n      onOk={async () => {\n        const values = await form.validateFields();\n        try {\n          setLoading(true);\n          await onSubmit(values);\n          modal.resolve();\n          modal.hide();\n        } catch (err) {\n          modal.reject(err);\n        } finally {\n          setLoading(false);\n        }\n      }}\n    >\n      <Form form={form} initialValues={initialValues}>\n        <Form.Item name={"name"} label="\u59d3\u540d" rules={[{ required: true }]}>\n          <Input />\n        </Form.Item>\n        <Form.Item name={"age"} label="\u5e74\u9f84">\n          <InputNumber />\n        </Form.Item>\n      </Form>\n    </Modal>\n  );\n});\n';var B=t(11533);const V=B.ZP.create((e=>{let{onSubmit:n,initialValues:t}=e;const[l]=w.Z.useForm(),r=(0,B.dd)(),[s,c]=(0,o.useState)(!1);return o.createElement(p.Z,(0,a.Z)({},B.ZP.antdModal(r),{title:"\u6ce8\u518c\u7528\u6237",confirmLoading:s,onOk:async()=>{const e=await l.validateFields();try{c(!0),await n(e),r.resolve(),r.hide()}catch(t){r.reject(t)}finally{c(!1)}}}),o.createElement(w.Z,{form:l,initialValues:t},o.createElement(w.Z.Item,{name:"name",label:"\u59d3\u540d",rules:[{required:!0}]},o.createElement(S.Z,null)),o.createElement(w.Z.Item,{name:"age",label:"\u5e74\u9f84"},o.createElement(N.Z,null))))})),D=e=>new Promise((e=>setTimeout(e,2e3)));function T(){return o.createElement(B.ZP.Provider,null,o.createElement(i.ZP,{onClick:()=>{const e={initialValues:{name:"zhangsan",age:20},async onSubmit(e){const n=u.ZP.loading("\u63d0\u4ea4\u6570\u636e\uff1a"+JSON.stringify(e));await D(e),n()}};B.ZP.show(V,e).then((()=>u.ZP.success("\u63d0\u4ea4\u6210\u529f!")),(e=>{u.ZP.error("\u63d0\u4ea4\u5931\u8d25\uff1a"+e.message)}))}},"\u663e\u793a\u5f39\u7a97"))}function L(){return o.createElement(d.Z,null,o.createElement(m.Z,{value:"2",label:"App"},o.createElement(c.Z,{language:"tsx"},F)),o.createElement(m.Z,{value:"3",label:"MyModal"},o.createElement(c.Z,{language:"tsx"},A)),o.createElement(m.Z,{value:"1",label:"\u6548\u679c"},o.createElement(T,null)))}const j={tags:["Antd","React"],keywords:["antd","antd modal","antd \u5f39\u7a97"]},q="Ant Design \u5f39\u7a97\u5c01\u88c5\uff1a\u6613\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027",z={permalink:"/blog/2023/03/04/antd-create-modal",editUrl:"https://github.com/whinc/whinc.github.io/tree/master/website/blog/2023/03-04-antd-create-modal/index.mdx",source:"@site/blog/2023/03-04-antd-create-modal/index.mdx",title:"Ant Design \u5f39\u7a97\u5c01\u88c5\uff1a\u6613\u7528\u6027\u548c\u53ef\u7ef4\u62a4\u6027",description:"\u5728 Ant Design(\u7b80\u79f0 Antd) \u7ec4\u4ef6\u5e93\u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0cAntd \u63d0\u4f9b\u7684Modal\u7ec4\u4ef6\u4e00\u822c\u7528\u6cd5\u5982\u4e0b\uff1a",date:"2023-03-04T00:00:00.000Z",formattedDate:"March 4, 2023",tags:[{label:"Antd",permalink:"/blog/tags/antd"},{label:"React",permalink:"/blog/tags/react"}],readingTime:5.53,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Antd","React"],keywords:["antd","antd modal","antd \u5f39\u7a97"]},prevItem:{title:"Knex.js \u6559\u7a0b",permalink:"/blog/2023/04/05/knex-tutorial"},nextItem:{title:"\u642d\u5efa\u535a\u5ba2\u7ad9\u70b9",permalink:"/blog/2023/03/04/how-to-setup-blog"}},H={authorsImageUrls:[]},J=[{value:"\u7b2c\u4e00\u7248\uff1a\u57fa\u4e8e ref",id:"\u7b2c\u4e00\u7248\u57fa\u4e8e-ref",level:2},{value:"\u7b2c\u4e8c\u7248\uff1a\u57fa\u4e8e ref \u8fdb\u884c\u62bd\u8c61",id:"\u7b2c\u4e8c\u7248\u57fa\u4e8e-ref-\u8fdb\u884c\u62bd\u8c61",level:2},{value:"\u7b2c\u4e09\u7248\uff1a\u57fa\u4e8e nice-modal-react \u5305",id:"\u7b2c\u4e09\u7248\u57fa\u4e8e-nice-modal-react-\u5305",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],_={toc:J},U="wrapper";function X(e){let{components:n,...t}=e;return(0,l.kt)(U,(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728 Ant Design(\u7b80\u79f0 Antd) \u7ec4\u4ef6\u5e93\u4e2d\u5f39\u7a97\u7684\u4f7f\u7528\u9891\u7387\u5f88\u9ad8\uff0cAntd \u63d0\u4f9b\u7684Modal\u7ec4\u4ef6\u4e00\u822c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Button, Modal } from 'antd';\n\nconst App: React.FC = () => {\n  const [isModalOpen, setIsModalOpen] = useState(false);\n\n  const showModal = () => {\n    setIsModalOpen(true);\n  };\n\n  const handleOk = () => {\n    setIsModalOpen(false);\n  };\n\n  const handleCancel = () => {\n    setIsModalOpen(false);\n  };\n\n  return (\n    <>\n      <Button type=\"primary\" onClick={showModal}>\n        Open Modal\n      </Button>\n      <Modal title=\"Basic Modal\" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n      </Modal>\n    </>\n  );\n};\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4f7f\u7528\u65b9\u5f0f\u5b58\u5728\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u4e0e\u6240\u5c5e\u7ec4\u4ef6\u7684\u72b6\u6001\u6df7\u5728\u4e00\u8d77\uff0c\u5bb9\u6613\u4f9d\u8d56\u7ec4\u4ef6\u5185\u90e8\u7684\u72b6\u6001\uff0c\u5bfc\u81f4\u5176\u4ed6\u5730\u65b9\u4e0d\u6613\u590d\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65f6\u9700\u8981\u5173\u6ce8\u5f39\u7a97\u7684\u6e32\u67d3\u4f4d\u7f6e\uff0c\u5e76\u4e3b\u52a8\u63a7\u5236\u5f39\u7a97\u7684\u663e\u793a\u548c\u9690\u85cf\u7ec6\u8282"),(0,l.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u5185\u5bb9\u7684\u6e32\u67d3\u65f6\u673a\u4e0d\u597d\u63a7\u5236\uff08\u9700\u8981\u989d\u5916\u5904\u7406\uff09\uff0c\u4f8b\u5982\u5b9e\u73b0\u4ec5\u5f53\u5f39\u7a97\u53ef\u89c1\u65f6\uff0c\u624d\u52a8\u6001\u52a0\u8f7d\u5185\u5bb9")),(0,l.kt)("p",null,"\u6211\u8ba4\u4e3a\u4e00\u4e2a\u597d\u7528\u7684\u5f39\u7a97\u6211\u8ba4\u4e3a\u5e94\u8be5\u5177\u5907\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301\u547d\u4ee4\u5f0f\u8c03\u7528\uff0c\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"li"},"window.alert()"),"\u8fd9\u79cd\u65b9\u5f0f\uff08\u4f7f\u7528\u65b9\u65e0\u9700\u5173\u6ce8\u5f39\u7a97\u7684\u58f0\u660e\u4f4d\u7f6e\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301\u4e0e\u5f39\u7a97\u7684\u53cc\u5411\u4ea4\u4e92\uff0c\u5373\u63d0\u4f9b\u53c2\u6570\u63a7\u5236\u5f39\u7a97\u7684\u6e32\u67d3\uff0c\u540c\u65f6\u5f39\u7a97\u5173\u95ed\u65f6\u80fd\u4ece\u4e2d\u83b7\u53d6\u6240\u9700\u6570\u636e\uff08\u8fd9\u4e2a\u5728\u8868\u5355\u573a\u666f\u5e38\u89c1\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5f39\u7a97\u7684\u72b6\u6001\u4e0e\u5176\u6240\u5728\u7ec4\u4ef6\u6811\u9694\u79bb\uff08\u907f\u514d\u72b6\u6001\u6c61\u67d3\uff09")),(0,l.kt)("p",null,"Antd \u63d0\u4f9b\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://4x.ant.design/components/modal-cn/#Modal.method()"},"Modal.method()")," \u5f88\u597d\u7684\u5904\u7406\u4e86\u7b2c 1 \u548c 3 \u4e2a\u95ee\u9898\uff0c\u4f7f\u7528\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Modal.confirm({\n    title: '\u786e\u8ba4\uff1f',\n    content: <MyModalContent>,\n    onOk () {\n        // do something\n    }\n})\n")),(0,l.kt)("p",null,"\u4f46\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Modal.method()"),"\u5e76\u672a\u89e3\u51b3\u7b2c 2 \u4e2a\u95ee\u9898\uff0c\u5176\u5185\u5bb9\u5c55\u793a\u540e\u5c31\u4e0e\u5f53\u524d\u4e0a\u4e0b\u6587\u8131\u79bb\u8054\u7cfb\u4e86\uff0c\u4e3a\u4e86\u5b9e\u73b0\u6240\u671f\u671b\u7684\u5f39\u7a97\uff0c\u4e0b\u9762\u6211\u5c1d\u8bd5\u4e86\u51e0\u79cd\u5c01\u88c5\u65b9\u5f0f\uff0c\u8bd5\u56fe\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u7b2c\u4e00\u7248\u57fa\u4e8e-ref"},"\u7b2c\u4e00\u7248\uff1a\u57fa\u4e8e ref"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u5c01\u88c5\u7684\u7b2c\u4e00\u7248\u5f39\u7a97\uff0c\u5f39\u7a97\u901a\u8fc7\u66b4\u9732 ref \u5f15\u7528\uff0c\u8ba9\u5916\u90e8\u63a7\u5236\u5f39\u7a97\u7684\u663e\u793a\uff0c\u4ee5\u53ca\u4f20\u9012\u6570\u636e\u7ed9\u5f39\u7a97\u5bb9\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5c06\u5f39\u7a97\u5185\u90e8\u7684\u5904\u7406\u7ed3\u679c\u4f20\u9012\u7ed9\u5916\u90e8\u3002"),(0,l.kt)(k,{mdxType:"Demo1"}),(0,l.kt)("h2",{id:"\u7b2c\u4e8c\u7248\u57fa\u4e8e-ref-\u8fdb\u884c\u62bd\u8c61"},"\u7b2c\u4e8c\u7248\uff1a\u57fa\u4e8e ref \u8fdb\u884c\u62bd\u8c61"),(0,l.kt)("p",null,"\u57fa\u4e8e\u4e0a\u9762\u5f39\u7a97\u7684\u5c01\u88c5\u6a21\u5f0f\uff0c\u6839\u636e\u9700\u8981\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6269\u5c55\uff0c\u57fa\u672c\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u5f39\u7a97\u4f7f\u7528\u573a\u666f\u4e86\u3002\u4f46\u662f\u4e0a\u9762\u5c01\u88c5\u65b9\u5f0f\u6709\u4e0d\u5c11\u6837\u677f\u4ee3\u7801\uff0c\u6bcf\u6b21\u5199\u4e2a\u5f39\u7a97\u6709\u4e0d\u5c11\u91cd\u590d\u5de5\u4f5c\uff0c\u4e8e\u662f\u5c06\u5bf9\u5f39\u7a97\u7684\u5c01\u88c5\u6a21\u5f0f\u5265\u79bb\u51fa\u6765\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"createModal"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u6837\u677f\u4ee3\u7801\uff0c\u805a\u7126\u4e8e\u7f16\u5199\u5f39\u7a97\u7684\u5185\u5bb9\u548c\u4ea4\u4e92\u903b\u8f91\u3002"),(0,l.kt)(c.Z,{language:"tsx",mdxType:"CodeBlock"},y),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"createModal")," \u521b\u5efa\u5f39\u7a97\u7684\u793a\u4f8b\uff0c\u53ef\u4ee5\u770b\u5230\u5f39\u7a97\u7684\u6e90\u7801\u5df2\u7ecf\u51cf\u5c11\u5230\u4e00\u884c\u4ee3\u7801\u4e86\uff0c\u5199\u5f39\u7a97\u65f6\u53ea\u9700\u8981\u5173\u6ce8\u4e8e\u5f39\u7a97\u7684\u5185\u5bb9\u533a\u57df\uff0c\u4f7f\u7528\u5f39\u7a97\u65f6\u4e5f\u65e0\u9700\u521b\u5efa ref \u6765\u5f15\u7528\u5f39\u7a97\uff0c\u800c\u662f\u901a\u8fc7\u5f39\u7a97\u4e0a\u66b4\u9732\u7684\u9759\u6001\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"MyModal.show()"),"\u663e\u793a\u5f39\u7a97\u548c\u4f20\u53c2\u3002"),(0,l.kt)(P,{mdxType:"Demo2"}),(0,l.kt)("p",null,"\u7ecf\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"createModal"),"\u5c01\u88c5\u540e\uff0c\u4e1a\u52a1\u5c42\u53ea\u9700\u5173\u6ce8\u5f39\u7a97\u7684\u5185\u5bb9\uff08\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>"),"\u7684\u5b50\u7ec4\u4ef6\uff09\uff0c\u65e0\u9700\u5904\u7406\u5f39\u7a97\u4e0e\u5185\u5bb9\u7684\u4ea4\u4e92\u3002 \u90a3\u4f7f\u7528\u65f6\u5982\u4f55\u63a7\u5236\u5f39\u7a97\u7684\u4ea4\u4e92\u5462\uff1f\u4f8b\u5982\u70b9\u51fb\u786e\u8ba4\u65f6\u83b7\u53d6\u5f39\u7a97\u4e2d\u7684\u8868\u5355\u5185\u5bb9\u3001\u70b9\u51fb\u786e\u8ba4\u65f6\u5f39\u7a97\u6309\u94ae\u663e\u793a loading \u6548\u679c\u7b49\u3002"),(0,l.kt)("p",null,"\u7b54\u6848\u662f\u901a\u8fc7\u5f39\u7a97\u66b4\u9732\u7684\u9759\u6001\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"MyModal.show()"),"\u5b9e\u73b0\uff0c\u8bf7\u770b\u4e0b\u9762\u4f8b\u5b50\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"state/setState"),"\u53ef\u4ee5\u5728\u5f39\u7a97\u7ec4\u4ef6\u5185\u90e8\u5b58\u50a8\u72b6\u6001\uff0c\u901a\u8fc7 ref \u53ef\u4ee5\u8c03\u7528\u5f39\u7a97\u5185\u5bb9\u7ec4\u4ef6\u66b4\u9732\u7684\u65b9\u6cd5\u3002"),(0,l.kt)(R,{mdxType:"Demo3"}),(0,l.kt)("h2",{id:"\u7b2c\u4e09\u7248\u57fa\u4e8e-nice-modal-react-\u5305"},"\u7b2c\u4e09\u7248\uff1a\u57fa\u4e8e nice-modal-react \u5305"),(0,l.kt)("p",null,"\u5076\u7136\u6d4f\u89c8\u77e5\u4e4e\u770b\u5230",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/552965494"},"\u8fd9\u7bc7\u6587\u7ae0"),"\uff0c\u624d\u5f97\u77e5\u5df2\u7ecf\u6709\u4eba\u505a\u4e86\u7c7b\u4f3c\u7684\u5de5\u4f5c\uff0c\u5e76\u4e14\u5f00\u6e90\u4e86\u53eb ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eBay/nice-modal-react"},"nice-modal-react"),"\uff0c\u5176\u539f\u7406\u662f\u63d0\u4f9b\u5168\u5c40\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\u6765\u5b58\u50a8\u548c\u6e32\u67d3\u5168\u5c40\u5f39\u7a97\uff0c\u901a\u8fc7\u5176\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"create()"),"\u65b9\u6cd5\u521b\u5efa\u7684\u5f39\u7a97\u540e\uff0c\u5373\u53ef\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"show()/hide()"),"\u65b9\u6cd5\u547d\u4ee4\u5f0f\u4f7f\u7528\u5f39\u7a97\uff0c\u5f39\u7a97\u7684\u5185\u90e8\u72b6\u6001\u4e0e\u5916\u90e8\u7ec4\u4ef6\u9694\u79bb\uff0c\u5b8c\u5168\u6ee1\u8db3\u4e86\u6587\u7ae0\u5f00\u5934\u63d0\u5230\u7684\u51e0\u4e2a\u7279\u70b9\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e nice-modal-react \u5e93\u91cd\u5199\u7684\u4e0a\u9762\u4f8b\u5b50"),(0,l.kt)(L,{mdxType:"Demo4"}),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"Antd \u7684\u5f39\u7a97\u529f\u80fd\u5f88\u591a\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u8fd8\u662f\u9700\u8981\u505a\u4e0d\u5c11\u5de5\u4f5c\uff0c\u901a\u8fc7\u5c01\u88c5 Antd \u7684\u5f39\u7a97\uff0c\u5927\u5927\u7b80\u5316\u4e86\u5f39\u7a97\u7684\u5904\u7406\u903b\u8f91\uff0c\u8ba9\u4e1a\u52a1\u5c42\u4e13\u6ce8\u4e8e\u5f39\u7a97\u7684\u5185\u5bb9\u903b\u8f91\u3002"))}X.isMDXComponent=!0}}]);