import GroupModel from '../models/group'

export const getInviteLink = async (req, res) => {
    const { user } = req
    const group = await GroupModel.findById(user.group)
    res.send(`${process.env.CLIENT_HOST}/register?refId=${group._id}`)
}
