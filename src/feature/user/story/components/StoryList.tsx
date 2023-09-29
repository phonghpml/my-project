import { useLoaderData } from "react-router-dom"
import { Story } from "../../../../generated/mybe"
import Table, { ColumnsType } from "antd/es/table"

export const StoryList = () => {
  //@ts-ignore
  const dataStory: Story[] = useLoaderData()?.data?.data as Story[]
  const columns: ColumnsType<Story> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    
  ]
  return (
    <>
      <Table columns={columns} dataSource={dataStory} />
    </>
  )
}
