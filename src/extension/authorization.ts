import { END_POINT_BE } from "../constant"

export const isLogin = async (): Promise<boolean> => {
    const me = await fetch(`${END_POINT_BE}/users/me`, {
        headers: {
            "Authentication": localStorage.getItem('jwt') ?? '',
        },

    })
    if (me) {
        true
    }
    return false
}
