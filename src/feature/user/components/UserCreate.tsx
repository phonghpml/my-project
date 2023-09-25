import { END_POINT_BE } from "../../../constant"
import { UserForm } from "./UserFrom"
export const actionCreateUser = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const formDataCreate = Object.fromEntries(formData)
  formDataCreate.type = "Admin"
  console.log(JSON.stringify(formDataCreate), "JSON.stringify(formDataCreate)")
  return fetch(`${END_POINT_BE}/users`, {
    method: "POST",
    body: JSON.stringify(formDataCreate),
    headers: {
      "Content-Type": "application/json",
    },
  }) 
}

export const UserCreate = () => {
  return (
    <>
      <UserForm></UserForm>
    </>
  )
}
