import { GanttChartSquare, Blocks, Gem } from "lucide-react"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'Lore1 ipsum dolor sit amet, consectetur adipisicing elit Quibusdam. Lorem ipsum dolor sit amet.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Lore2 ipsum dolor sit amet, consectetur adipisicing elit Quibusdam. Lorem ipsum dolor sit amet.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Programming',
        description: 'Lore3 ipsum dolor sit amet, consectetur adipisicing elit Quibusdam. Lorem ipsum dolor sit amet.',
    },
]

const Services = () => {
  return (
    <section className="mb-12 mt-8 xl:mt-16 xl:mb-36">
        <div className="xl:mx-16 mx-6 ">
            <h2 className="section-title mb-20 text-center mx-auto">My Services</h2>

            <div className="grid xl:grid-cols-3 justify-center gap-y-16 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item, index) => {
                    return (
                        <Card className='w-full max-w-[424px] h-[280px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className="w-[120px] h-[60px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                            </CardHeader>

                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services