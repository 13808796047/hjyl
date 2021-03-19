package models

import (
	orm "history/database"

	"github.com/unknwon/com"
)

type Data struct {
	ID     int64  `json:"id"` // 列名为 `id`
	Type   int64  `json:"type"`
	Time   int64  `json:"time"`
	Number string `json:"number"`
	Data   string `json:"data"`
}

func GetDatas(maps map[string]interface{}) (datas []Data) {

	orm.Eloquent.Where("type=?", 36).Where("time >?", com.StrTo(maps["start_date"]).MustString()).Where("time<?", com.StrTo(maps["end_date"]).MustString()).Find(&datas)
	return
}
