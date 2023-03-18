import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { ConnectOptions } from '@hyperledger/fabric-gateway'

export const useConnectionStore = defineStore('options', {
    state: () => ({
        activeConnection: undefined as ConnectOptions | undefined,
        connections: useStorage('connections', new Map<string, ConnectOptions>())
    }),

    actions: {
        addConnectOptions(key: string, options: ConnectOptions) {
            this.connections.set(key, options)
        },

        deleteConnectOptions(key: string) {
            if (this.connections.has(key)) {
                this.connections.delete(key)
            }
        },

        selectConnection(key: string) {
            if (this.connections.has(key)) {
                this.activeConnection = this.connections.get(key)
            }
        }
    }
})