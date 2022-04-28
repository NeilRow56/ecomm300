class APIFeatures {
	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
	}

	search() {
		const clothing = this.queryStr.clothing
			? {
					category: {
						$regex: this.queryStr.clothing,
						$options: 'i',
					},
			  }
			: {};

		this.query = this.query.find({ ...clothing });
		return this;
	}

	filter() {
		const queryCopy = { ...this.queryStr };

		// Remove fields from query
		const removeFields = ['clothing', 'page'];
		removeFields.forEach((el) => delete queryCopy[el]);

		this.query = this.query.find(queryCopy);
		return this;
	}

	pagination(resPerPage) {
		const currentPage = Number(this.queryStr.page) || 1;
		const skip = resPerPage * (currentPage - 1);

		this.query = this.query.limit(resPerPage).skip(skip);
		return this;
	}
}

export default APIFeatures;
