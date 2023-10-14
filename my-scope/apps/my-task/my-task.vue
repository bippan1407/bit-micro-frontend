<script setup>
import { useCounter } from '@my-org/my-scope.common.store/counter'

const counter = useCounter()
</script>

<template>
      {{counter.count}}
  <button @click="counter.inc">click</button>
    <div>
        <p>This is task screen {{count}} {{name}}</p>
    </div>
</template>