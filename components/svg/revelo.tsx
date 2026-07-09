import Image from 'next/image'
import * as React from 'react'

const Revelo = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <Image
    src="/assets/logo/revelo.png"
    alt="Revelo"
    width={16}
    height={16}
    className={`size-4 rounded-sm ${className ?? ''}`}
  />
)

export default Revelo
