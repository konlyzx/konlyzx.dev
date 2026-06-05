import Image from 'next/image'
import * as React from 'react'

const NewShields = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <Image
    src="/assets/logo/new-shields.svg"
    alt="New Shields"
    width={16}
    height={16}
    className={`size-4 rounded-sm ${className ?? ''}`}
  />
)

export default NewShields
