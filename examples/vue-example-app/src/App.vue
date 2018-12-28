<template>
  <div id="app">
    <language-selector></language-selector>
    <p>{{ $t('SIMPLE') }}</p>
    <p>{{ $t('HELLO', {name:'User', where:'OneSky'}) }}</p>
    <p>{{ $tc('PHOTO', 0) }}</p>
    <p>{{ $tc('PHOTO', 1) }}</p>
    <p>{{ $tc('PHOTO', 10, { count: 10 }) }}</p>
  </div>
</template>
