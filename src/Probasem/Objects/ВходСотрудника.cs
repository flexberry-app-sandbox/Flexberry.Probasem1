﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probasem
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Вход сотрудника.
    /// </summary>
    // *** Start programmer edit section *** (ВходСотрудника CustomAttributes)

    // *** End programmer edit section *** (ВходСотрудника CustomAttributes)
    [AutoAltered()]
    [Caption("Вход сотрудника")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВходСотрудникаE", new string[] {
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Сотрудник.Должность.НаимДолжности as \'Должность\'",
            "Сотрудник.Должность.Карта.КодКарты as \'Номер карты\'"}, Hidden=new string[] {
            "Сотрудник.ФИО"})]
    [MasterViewDefineAttribute("ВходСотрудникаE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ВходСотрудника : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Probasem.Сотрудник fСотрудник;
        
        private IIS.Probasem.РегистрВхода fРегистрВхода;
        
        // *** Start programmer edit section *** (ВходСотрудника CustomMembers)

        // *** End programmer edit section *** (ВходСотрудника CustomMembers)

        
        /// <summary>
        /// Вход сотрудника.
        /// </summary>
        // *** Start programmer edit section *** (ВходСотрудника.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (ВходСотрудника.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Probasem.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (ВходСотрудника.Сотрудник Get start)

                // *** End programmer edit section *** (ВходСотрудника.Сотрудник Get start)
                IIS.Probasem.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (ВходСотрудника.Сотрудник Get end)

                // *** End programmer edit section *** (ВходСотрудника.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВходСотрудника.Сотрудник Set start)

                // *** End programmer edit section *** (ВходСотрудника.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (ВходСотрудника.Сотрудник Set end)

                // *** End programmer edit section *** (ВходСотрудника.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Probasem.РегистрВхода.
        /// </summary>
        // *** Start programmer edit section *** (ВходСотрудника.РегистрВхода CustomAttributes)

        // *** End programmer edit section *** (ВходСотрудника.РегистрВхода CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РегистрВхода"})]
        public virtual IIS.Probasem.РегистрВхода РегистрВхода
        {
            get
            {
                // *** Start programmer edit section *** (ВходСотрудника.РегистрВхода Get start)

                // *** End programmer edit section *** (ВходСотрудника.РегистрВхода Get start)
                IIS.Probasem.РегистрВхода result = this.fРегистрВхода;
                // *** Start programmer edit section *** (ВходСотрудника.РегистрВхода Get end)

                // *** End programmer edit section *** (ВходСотрудника.РегистрВхода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВходСотрудника.РегистрВхода Set start)

                // *** End programmer edit section *** (ВходСотрудника.РегистрВхода Set start)
                this.fРегистрВхода = value;
                // *** Start programmer edit section *** (ВходСотрудника.РегистрВхода Set end)

                // *** End programmer edit section *** (ВходСотрудника.РегистрВхода Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВходСотрудникаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВходСотрудникаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВходСотрудникаE", typeof(IIS.Probasem.ВходСотрудника));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ВходСотрудника.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfВходСотрудника CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfВходСотрудника CustomAttributes)
    public class DetailArrayOfВходСотрудника : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Probasem.DetailArrayOfВходСотрудника members)

        // *** End programmer edit section *** (IIS.Probasem.DetailArrayOfВходСотрудника members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ВходСотрудника by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ВходСотрудника.
        /// </summary>
        public DetailArrayOfВходСотрудника(IIS.Probasem.РегистрВхода fРегистрВхода) : 
                base(typeof(ВходСотрудника), ((ICSSoft.STORMNET.DataObject)(fРегистрВхода)))
        {
        }
        
        public IIS.Probasem.ВходСотрудника this[int index]
        {
            get
            {
                return ((IIS.Probasem.ВходСотрудника)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Probasem.ВходСотрудника dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
