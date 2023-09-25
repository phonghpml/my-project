// import Table, { ColumnsType } from "antd/es/table";
// import { useLoaderData } from "react-router-dom";
// import { END_POINT_BE } from "../../../constant";

// export interface IUser {
//   age: number;
//   password: string;
//   phoneNumber: number;
//   type: string;
//   username: string;
//   __v: number;
//   _id: string;
// }

// export const loaderUsers = () => {
//   return fetch(`${END_POINT_BE}/users`, {
//     method: "GET",
//   });
// };

// export const UserList = () => {
//   const dataUsers: IUser[] = useLoaderData() as IUser[];
//   console.log(dataUsers);
//   const columns: ColumnsType<IUser> = [
//     {
//       title: "Name",
//       dataIndex: "username",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phoneNumber",
//     },
//   ];

//   return <Table columns={columns} dataSource={dataUsers} />;
// };
