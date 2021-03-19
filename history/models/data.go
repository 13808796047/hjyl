package models

import (
	"fmt"
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
	fmt.Println(maps["start_date"], maps["end_date"])
	orm.Eloquent.Where("type=?", 36).Where("time >?", maps["start_date"]).Where("time<?", maps["end_date"]).Find(&datas)
	return
}
