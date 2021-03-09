<?php
namespace Home\Model;

use Think\Model\RelationModel;

class MemberBankModel extends RelationModel
{
    protected $_link = array(
        'bankList' => array(
            'mapping_type' => 2,
            'class_name' => 'bank',
            'foreign_key' => 'bankId',
        ),
    );
}
