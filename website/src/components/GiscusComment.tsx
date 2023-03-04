import { useColorMode } from '@docusaurus/theme-common';
import Giscus from "@giscus/react";
import React from 'react';

export default function GiscusComment() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            id="comments"
            repo="whinc/whinc.github.io"
            repoId="MDEwOlJlcG9zaXRvcnkxMDQyMTU3MjY="
            category="Announcements"
            categoryId="DIC_kwDOBjY0rs4CBGEB"
            mapping="title"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode}
            lang="zh-CN"
            loading="lazy"
        />
    );
}