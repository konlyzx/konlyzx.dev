import Image from 'next/image'
import * as React from 'react'

const BetterFlow = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <Image
    src="/assets/logo/better-flow.svg"
    alt="Better Flow"
    width={16}
    height={16}
    className={`size-4 rounded-sm ${className ?? ''}`}
  />
)

export default BetterFlow
