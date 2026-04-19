import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  
  // Check for image in frontmatter (for agents)
  const image = fileData.frontmatter?.image as string | undefined
  
  return (
    <article class={classString}>
      {image && (
        <div class="page-header-image">
          <img 
            src={image} 
            alt={fileData.frontmatter?.name as string ?? fileData.frontmatter?.title as string ?? "Profile"} 
            class="frontmatter-image"
          />
        </div>
      )}
      {content}
    </article>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor