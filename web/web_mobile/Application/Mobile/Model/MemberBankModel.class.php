<?php
namespace Home\Model;

use Think\Model\RelationModel;

class MemberBankModel extends RelationModel
{
    protected $tableName = 'member_bank';
    protected $_link = array(
        'BankList' => array(
            'mapping_type' => self::BELONGS_TO,
            'class_name' => 'bank',
            'foreign_key' => 'bankId',
        ),
    );
}
