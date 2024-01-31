import Api from "../Api"

export async function GetLogin(data) {
    const request = await Api.post("/login")

    return request
}