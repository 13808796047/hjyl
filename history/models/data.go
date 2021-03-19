package models

import (
	orm "github.com/13808796047/history/database"
)

type Data struct {
	ID     int64  `json:"id"` // 列名为 `id`
	Type   int64  `json:"type"`
	Time   int64  `json:"time"`
	Number string `json:"number"`
	Data   string `json:"data"`
}

func GetDatas(maps interface{}) (datas []Data) {
	orm.Eloquent.Where(maps).Find(&datas)
	return
}
