<template>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Host</th>
                <th>Port</th>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="connection in connectionStore.connections">
                <td>{{ connection[1].name }}</td>
                <td>{{ connection[1].host }}</td>
                <td>{{ connection[1].port }}</td>
                <td class="text-end">
                    <button class="btn btn-primary me-2" v-if="connection[0] !== connectionStore.activeConnection"
                        @click="connectionStore.selectConnection(connection[0])">
                        <i class="fa-regular fa-circle-check"></i>
                    </button>

                    <button class="btn btn-danger" v-bind:disabled="(connection[0] === connectionStore.activeConnection)"
                        @click="connectionStore.deleteConnection(connection[0])">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useConnectionStore } from '@renderer/stores/connectionStore'

const connectionStore = useConnectionStore()

</script>