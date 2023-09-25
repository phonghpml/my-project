import Table, { ColumnsType } from "antd/es/table"
import { Form, useLoaderData, useNavigate } from "react-router-dom"
import { END_POINT_BE } from "../../../constant"
import { userCreatePath } from "../routes"

export interface IUser {
  age: number
  email: string
  password: string
  phoneNumber: number
  type: string
  username: string
  __v: number
  _id: string
}

export const loaderUsers = () => {
  return fetch(`${END_POINT_BE}/users`, {
    method: "GET",
  })
}

export const UserList = () => {
  const dataUsers: IUser[] = useLoaderData() as IUser[]
  const navigate = useNavigate()

  const columns: ColumnsType<IUser> = [
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
    },
  ]

  return (
    <>
      <Form>
        <button
          onClick={() => {
            navigate(userCreatePath)
          }}
        >
          Create
        </button>
      </Form>
      <Table columns={columns} dataSource={dataUsers} />
    </>
  )
}
