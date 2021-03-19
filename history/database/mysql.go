package database

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var Eloquent *gorm.DB

func init() {
	Eloquent, err := gorm.Open("mysql", "root:GUPMTMD3o1uSI3gq@tcp(127.0.0.1:3306)/hjyl?charset=utf8&parseTime=True&loc=Local&timeout=10ms")
	defer Eloquent.Close()
	if err != nil {
		fmt.Printf("mysql connect error %v", err)
	}
}
