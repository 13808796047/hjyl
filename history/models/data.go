package models·

import (

	orm "history/database"
)

type Data struct {
	ID     int64  `json:"id"` // 列名为 `id`
	Type   int64  `json:"type"`
	Time   int64  `json:"time"`
	Number string `json:"number"`
	Data   string `json:"data"`
}

func GetDatas(maps map[string]interface{}) (datas []Data) {
	orm.Eloquent.Where("type=?", maps["data_type"]).Where("time BETWEEN ? AND ?", maps["start_date"],maps["end_date"]).Order("id DESC").Find(&datas)
	return
}
