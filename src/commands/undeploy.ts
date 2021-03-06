import { Environment } from "dropin-client"
import { Bundle } from "../core/bundle"

export const Undeploy = (path: string, stage: string, name?: string) => {
  const bundle = new Bundle(path, Environment.PRODUCTION)
  bundle.display()
}
