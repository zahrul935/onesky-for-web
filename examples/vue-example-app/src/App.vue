<template>
  <div id="app">
    Language: <language-selector></language-selector>
    <br />
    Region: <region-selector></region-selector>
    <p>{{ $t('SIMPLE') }}</p>
    <p>{{ $t('HELLO', {name:'User', where:'OneSky'}) }}</p>
    <p>{{ $tc('PHOTO_VUE', 0) }}</p>
    <p>{{ $tc('PHOTO_VUE', 1) }}</p>
    <p>{{ $tc('PHOTO_VUE', 10, { count: 10 }) }}</p>
  </div>
</template>
