function formatTitle(slug) {
    const minorWords = [
        "a",
        "an",
        "the",
        "and",
        "but",
        "or",
        "for",
        "nor",
        "on",
        "at",
        "to",
        "from",
        "by",
        "in",
        "with",
        "of",
    ];

    const titleMap = {
        sqrt_x: "Sqrt(x)",
        two_sum_II_input_array_is_sorted: "Two Sum II - Input Array Is Sorted",
        pow_x_n: "Pow(x, n)",
        h_index: "H-Index",
        insert_delete_getRandom_o_1: "Insert Delete GetRandom O(1)",
        three_sum: "3Sum",
    };

    if (titleMap[slug]) {
        return titleMap[slug];
    }

    return slug
        .split("_")
        .map((s, index) => {
            if (s == s.toUpperCase()) {
                return s;
            }
            if (index != 0 && minorWords.includes(s.toLowerCase())) {
                return s.toLowerCase();
            }
            return s.charAt(0).toUpperCase() + s.slice(1);
        })
        .join(" ");
}

module.exports = { formatTitle };
