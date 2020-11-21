<?php
namespace Home\Model;
use Think\Model\RelationModel;
class MemberBankModel extends RelationModel{
    protected $_link = array(
        'bankList'=>array(
            'mapping_type'      => self::BELONGS_TO,
            'mapping_fields' =>'bankId',
            ),
        );
}