'use client'
import Select from 'react-select';
import useSWR from 'swr'

const fetchModels = (url: string) => fetch("/api/getEngines").then((res) => res.json())

function ModalSelection() {
    const {data:models, isLoading, error} = useSWR("models", fetchModels);
    const {data:model, mutate:setModel} = useSWR("model",{
        fallbackData: 'text-davinci-003',
    });

    
  return (
    <div className='mt-2'>
        <Select
        className="mt-2"
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control:(state)=>(
                "bg-[#434654] border-[#434654]"
            ),
        }}
        />
    </div>
  )
}

export default ModalSelection