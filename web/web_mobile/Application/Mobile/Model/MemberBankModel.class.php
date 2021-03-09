<?php
namespace Home\Model;

use Think\Model\RelationModel;

class MemberBankModel extends RelationModel
{
    protected $tableName = 'member_bank';
    public $_link = array(
        'BankList' => array(
            'mapping_type' => self::BELONGS_TO,
            'class_name' => 'BankList',
            'foreign_key' => 'bankId',
            'mapping_name' => 'bank',
        ),
    );
}
