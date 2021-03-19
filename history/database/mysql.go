package database

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var Eloquent *gorm.DB

func init() {
	Eloquent, _ = gorm.Open("mysql", "root:GUPMTMD3o1uSI3gq@tcp(127.0.0.1:3306)/hjyl?charset=utf8")

	// if err != nil {
	// 	fmt.Printf("mysql connect error %v", err)
	// }
}

// func CloseDB() {
// 	defer Eloquent.Close()
// }
