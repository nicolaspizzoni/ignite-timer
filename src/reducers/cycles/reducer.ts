import { ActionsType } from "./actions"
import { produce } from 'immer'

export interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export function CyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
        case ActionsType.ADD_NEW_CYCLE:
            // return {
            //     ...state,
            //     cycles: [...state.cycles, action.payload.newCycle],
            //     activeCycleId: action.payload.newCycle.id,
            // }
            return produce(state, (draft) => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
            break;
        case ActionsType.INTERRUPT_CURRENT_CYCLE: {
            // return {
            //     ...state,
            //     cycles: state.cycles.map((cycle) => {
            //         if (cycle.id === state.activeCycleId) {
            //             return { ...cycle, interruptedDate: new Date() }
            //         } else {
            //             return cycle
            //         }
            //     }),
            //     activeCycleId: null
            // }

            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0){
                return state
            }

            return produce(state, (draft) => {
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
                draft.activeCycleId = null
            })
        }
            break;
        case ActionsType.MARK_CURRENT_CYCLE_AS_FINISHED: {
            // return {
            //     ...state,
            //     cycles: state.cycles.map((cycle) => {
            //         if (cycle.id === state.activeCycleId) {
            //             return { ...cycle, finishedDate: new Date() }
            //         } else {
            //             return cycle
            //         }
            //     }),
            //     activeCycleId: null,
            // }

            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0){
                return state
            }

            return produce(state, (draft) => {
                draft.cycles[currentCycleIndex].finishedDate = new Date()
                draft.activeCycleId = null
            })
        }
            break;
        default:
            return state
    }
}