async function pagination(req, res, next) {
    try {
        let { limit = 5, page = 1, sort = "title:1" } = req.query;

        let [sortField, order] = sort.split(":");

        limit = parseInt(limit);
        page = parseInt(page);
        order = parseInt(order);

        if (limit > 0 && page > 0) {
            const pagedList = await req.result.find({})
                .sort({ [sortField]: order })
                .skip((page - 1) * limit)
                .limit(parseInt(limit));

            res.status(200).json(pagedList);
        }
        else {
            res.status(400).json({ status: 400, message: "Os valores de limit e page devem ser maiores que 0" });
        }
    } catch (error) {
        next();
    }
}

export default pagination;