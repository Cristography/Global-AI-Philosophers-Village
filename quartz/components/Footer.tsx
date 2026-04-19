import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

export default ((_opts?: Options) => {
  const Footer: QuartzComponent = (_props: QuartzComponentProps) => {
    return <></>
  }

  return Footer
}) satisfies QuartzComponentConstructor
