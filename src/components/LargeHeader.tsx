import { FC, HTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const headerVariants = cva(
    'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
    {
        variants: {
            size: {
                default: 'text-4xl md:text-5xl lg:text-6xl',
                lg: 'text-5xl md:text-6xl lg:text-7xl',
                md: 'text-3xl md:text-4xl lg:text-5xl',
                sm: 'text-2xl md:text-3xl lg:text-4xl',
            },
            defaultVariants: {
                size: 'default',
            },
        }
    }
)

interface LargeHeaderProps
    extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> { }

const LargeHeader = forwardRef<HTMLHeadingElement, LargeHeaderProps>(({
    className, size, children, ...props
}, ref) => {
    return <h1 ref={ref} {...props} className={cn(
        headerVariants({ size, className })
    )}>
        {children}
    </h1>
})

LargeHeader.displayName = 'LargeHeader'

export default LargeHeader