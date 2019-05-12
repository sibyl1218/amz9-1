<template>
    	<header :class="['am-header','am-header-default','my-header']">
      <div :class="['am-header-left','am-header-nav','am-dropdown']"  data-am-dropdown>
        <a href="javascript:;" class="am-dropdown-toggle"  data-am-dropdown-toggle>
          <i :class="['am-header-icon','am-icon-th-large']"></i>
        </a>
      </div>
      <h1 class="am-header-title">
        <a href="#title-link" class="">营养生活</a>
      </h1>
      <div :class="['am-header-right','am-header-nav']">
        <a href="#right-link" class="">
          <i :class="['am-header-icon','am-icon-share-alt']"></i>
        </a>
      </div>
    </header>
</template>
<style scoped>
    header{position: fixed;z-index: 99;}
</style>
