import TypeModel from "../models/type"

export const getType = async (req, res) => {
    const { user } = req
    const result = await TypeModel.find({ group: user.group })
    res.send(result.map(type => type.name))
}
