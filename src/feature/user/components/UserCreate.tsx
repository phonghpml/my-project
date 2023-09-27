import { END_POINT_BE } from "../../../constant"
import { UserForm } from "./UserFrom"
export const actionCreateUser = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const formDataCreate = Object.fromEntries(formData)
  formDataCreate.type = "Admin"
  return fetch(`${END_POINT_BE}/users`, {
    method: "POST",
    body: JSON.stringify(formDataCreate),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    
  })
}

export const UserCreate = () => {
  return (
    <>
      <UserForm></UserForm>
    </>
  )
}
