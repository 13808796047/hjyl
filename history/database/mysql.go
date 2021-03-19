package database

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var Eloquent *gorm.DB

func init() {
	Eloquent, err := gorm.Open("mysql", "homestead:secret@tcp(192.168.10.10:3306)/test?charset=utf8&parseTime=True&loc=Local&timeout=10ms")
	defer Eloquent.Close()
	if err != nil {
		fmt.Printf("mysql connect error %v", err)
	}
}
