import { contextBridge } from "electron"
import utils from './expose/utils'

contextBridge.exposeInMainWorld("utils", utils)
